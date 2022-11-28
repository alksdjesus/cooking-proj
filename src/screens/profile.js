import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from './home';
import '../App.css'


class Profile extends Component {
  render() {
    return (

      <div>
        <Home/>
        <form>
        <input type="text" id="fname" name="fname" placeholder=' First Name'/>
        <br></br>
        <input type="text" id="fname" name="fname" placeholder='Last Name'/>
        </form>

        <br></br>
        <p><b><u> Update Your Dietary Restrictions</u></b></p>
        <form>
        {/* <label for="Dairy"><span role="img" aria-label="dairy">🥛</span></label> */}
        <input type="checkbox" id="Dairy" name="Dairy" value="Dairy"/>
        <label for="Dairy">Dairy</label><br></br>

        {/* <label for="Tree Nuts"><span role="img" aria-label="nuts">🌰</span></label> */}
        <input type="checkbox" id="Tree Nuts" name="Tree Nuts" value="Tree Nuts"/>
        <label for="Tree Nuts">Tree Nuts</label><br></br>

        {/* <label for="Eggs"><span role="img" aria-label="eggs">🥚</span></label> */}
        <input type="checkbox" id="Eggs" name="Eggs" value="Egg"/>
        <label for="Eggs">Eggs</label><br></br>

        {/* <label for="Peanuts"><span role="img" aria-label="peanut">🥜</span></label> */}
        <input type="checkbox" id="Peanuts" name="Peanuts" value="Peanuts"/>
        <label for="Peanuts">Peanuts</label><br></br>

        {/* <label for="Shellfish"><span role="img" aria-label="shellfish">🍤</span></label> */}
        <input type="checkbox" id="Shellfish" name="Shellfish" value="Shellfish"/>
        <label for="Shellfish">Shellfish</label><br></br>

        {/* <label for="Soybean"><span role="img" aria-label="soybean">🌱</span></label> */}
        <input type="checkbox" id="Soybean" name="Soybean" value="Soybean"/>
        <label for="Soybean">Soybean</label><br></br>

        {/* <label for="Wheat"><span role="img" aria-label="wheat">🌾</span></label> */}
        <input type="checkbox" id="Wheat" name="Wheat" value="Wheat"/>
        <label for="Wheat">Wheat</label><br></br>

        {/* <label for="Fish"><span role="img" aria-label="fish">🐟</span></label> */}
        <input type="checkbox" id="Fish" name="Fish" value="Fish"/>
        <label for="Fish">Fish</label><br></br>
        </form>

        <form>
        <input type="text" id="email" name="email" placeholder=' E-mail'/>
        </form>

      </div>
    )
  }
}

export default Profile;
