import json
import logging

import boto3
from botocore.exceptions import ClientError
from custom_encoder import CustomEncoder

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodbTableName = 'User'
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(dynamodbTableName)


# methods:
getMethod = 'GET'
postMethod = 'POST'
patchMethod = 'PATCH'
deleteMethod = 'DELETE'

# paths
health = '/health'  # check if our api is up and running

users = '/users'  # Get multiple users info
profileInfo = '/profileinfo'  # CRUD on single user's info
userStat = '/userstat'  # CRU on single user's stat

recipes = '/recipes'  # Get multiple recipes info
recipe = '/recipe'  # CRUD on single user's recipe
recipeStat = '/recipestat'  # CRUD on single user's recipe stat


def lambda_handler(event, context):
    logger.info(event)
    httpMethod = event['httpMethod']
    path = event['path']

    # health
    if httpMethod == getMethod and path == health:
        response = buildResponse(200)

    # POSTS. NEED to send pk and sk in the body! <for all the SKs: profileInfo, userStat, recipe#<dish>, rStat#<dish> >
    elif httpMethod == postMethod and (path == profileInfo or path == userStat or path == recipe or path == recipeStat):
        response = save(json.loads(event['body']))
        

    # GET users. lists all users by username aka pk
    elif httpMethod == getMethod and path == users:
        response = getUsers()

    # GET single users info userInput = username
    elif httpMethod == getMethod and path == profileInfo:
        sk = 'profileInfo'
        response = get(event['queryStringParameters']['username'], sk)
        
    # PATCH profileInfo. userInput needed: username, updateKey, updateValue ex.{"username": "alex", "updateKey"="bio", "updateValue"="hey!"}
    elif httpMethod == patchMethod and path == profileInfo:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'profileInfo'
        updateKey = requestBody['updateKey']
        updateValue = requestBody['updateValue']
        response = modifyprofileInfo(pk, sk, updateKey, updateValue)

    # single users stat userInput = username
    elif httpMethod == getMethod and path == userStat:
        username = event['queryStringParameters']['username']
        sk = 'uStat'
        response = get(username, sk)
    # PATCH userStat. userInput needed: username, updateKey, updateValue ex.{"username": "alex", "updateKey"="follower", "updateValue"="8888"}
    elif httpMethod == patchMethod and path == userStat:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'uStat'
        updateKey = requestBody['updateKey']
        updateValue = requestBody['updateValue']
        response = modifyprofileInfo(pk, sk, updateKey, updateValue)

    # single users single recipe. userInputs = username, dishName
    elif httpMethod == getMethod and path == recipe:
        username = event['queryStringParameters']['username']
        dish = event['queryStringParameters']['dish']
        sk = 'recipe#%s' % dish
        response = get(username, sk)
     # PATCH recipe. userInput needed: username, updateKey, updateValue ex.{"username": "mingmar", "dish":"rice_pudding","updateKey"="recipePic", "updateValue"="coming soon"}
    elif httpMethod == patchMethod and path == recipe:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'recipe#%s' % requestBody['dish']
        updateKey = requestBody['updateKey']
        updateValue = requestBody['updateValue']
        response = modifyprofileInfo(pk, sk, updateKey, updateValue)

    # single users single recipes stats. userInputs = username, dishName
    elif httpMethod == getMethod and path == recipeStat:
        username = event['queryStringParameters']['username']
        dish = event['queryStringParameters']['dish']
        sk = 'rStat#%s' % dish

        response = get(username, sk)
     # PATCH recipeStat. userInput needed: username, updateKey, updateValue ex.{"username": "mingmar", "dish":"rice_pudding", "updateKey"="follower", "updateValue"="8888"}
    elif httpMethod == patchMethod and path == recipeStat:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'rStat#%s' % requestBody['dish']
        updateKey = requestBody['updateKey']
        updateValue = requestBody['updateValue']
        response = modifyprofileInfo(pk, sk, updateKey, updateValue)

     # Delete profileInfo. userInput needed: username
    elif httpMethod == deleteMethod and path == profileInfo:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'profileInfo'
        response = delete(pk, sk)

     # Delete userStat. userInput needed: username
    elif httpMethod == deleteMethod and path == userStat:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'uStat'
        response = delete(pk, sk)
        
     # Delete recipe. userInput needed: username
    elif httpMethod == deleteMethod and path == recipe:
        requestBody = json.loads(event['body'])
        pk = requestBody['username']
        sk = 'recipe#%s' % requestBody['dish']
        response = delete(pk, sk)
    else:
        response = buildResponse(404, 'Not Found')
    
    
    return response


def getUsers():
    try:
        response = table.scan()
        result = response['Items']

        while 'LastEvaluatedKey' in response:
            response = table.scan(
                ExclusiveStartKey=response['LastEvaluatedKey'])
            result.extend(response['Items'])

        users_list = set()
        for user in result:
            users_list.add(user['pk'])
        body = {
            'users': users_list
        }
    except ClientError as err:
        logger.error("Couldn't scan for movies. Here's why: %s: %s",
                     err.response['Error']['Code'], err.response['Error']['Message'])
        raise

    return buildResponse(200, body)


def get(pk, sk):
    try:
        response = table.get_item(Key={'pk': pk, 'sk': sk})

        if 'Item' in response:
            return buildResponse(200, response['Item'])
        else:
            return buildResponse(404, {'Message': 'profileInfo: %s not found for user: ' % pk})

    except ClientError as err:
        logger.error("Couldn't scan for profileInfo. Here's why: %s: %s",
                     err.response['Error']['Code'], err.response['Error']['Message'])
        raise


def save(requestBody):
    try:
        table.put_item(Item=requestBody)
        body = {
            'Operation': 'SAVE',
            'Message': 'SUCCESS',
            'Item': requestBody
        }
        return buildResponse(200, body)
    except ClientError as err:
        logger.error("Couldn't scan for profileInfo. Here's why: %s: %s",
                     err.response['Error']['Code'], err.response['Error']['Message'])
        raise


def modifyprofileInfo(pk, sk, updateKey, updateValue):
    try:
        response = table.update_item(
            Key={
                'pk': pk,
                'sk': sk
            },
            UpdateExpression='set %s = :value' % updateKey,
            ExpressionAttributeValues={
                ':value': updateValue
            },
            ReturnValues='UPDATED_NEW'
        )
        body = {
            'Operation': 'UPDATE',
            'Message': 'SUCCESS',
            'UpdatedAttributes': response
        }
        return buildResponse(200, body)
    except ClientError as err:
        logger.error("Couldn't scan for profileInfo. Here's why: %s: %s",
                     err.response['Error']['Code'], err.response['Error']['Message'])
        raise

#not complete


def getRecipes(pk, sk):
    try:
        response = table.get_item(Key={'pk': pk, 'sk': sk})

        if 'Item' in response:
            return buildResponse(200, response['Item'])
        else:
            return buildResponse(404, {'Message': 'profileInfo: %s not found for user: ' % pk})

    except ClientError as err:
        logger.error("Couldn't scan for profileInfo. Here's why: %s: %s",
                     err.response['Error']['Code'], err.response['Error']['Message'])
        raise

def delete(pk, sk):
    try:
        response = table.delete_item(
            Key={
                'pk': pk,
                'sk': sk
            },
            ReturnValues='ALL_OLD'
        )
        body = {
            'Operation': 'DELETE',
            'Message': 'SUCCESS',
            'UpdatedAttributes': response
        }
        return buildResponse(200, body)
    except ClientError as err:
        logger.error("Couldn't delete %s. Here's why: %s: %s",pk,
                     err.response['Error']['Code'], err.response['Error']['Message'])
        raise
        
def buildResponse(statusCode, body=None):
    response = {
        'statusCode': statusCode,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    if body is not None:
        response['body'] = json.dumps(body, cls=CustomEncoder)
    return response
