import logo from './logo.svg';
import './App.css';

export class Feed extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getRecipes() {
    try {
      const response = await fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=539b28b197f8412eba867c3356a8d6a6');
      const json = await response.json();
      this.setState({ data: json.recipes });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    //const navigation = this.props.navigation
    const { data, isLoading } = this.state;

    return (
      <div style={styles.container}>
          <FlatList 
            item={({ id }, index) => id}
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={this.renderItem}
          />
      </div>
    )
    }

  renderItem = ({ item }) => (
    <button onClick={() => this.props.navigation.navigate('Recipe', {paramkey: item})}>
    <Item
          title={item.title}
          sourceName={item.sourceName}
          readyInMinutes={item.readyInMinutes}
          />
    </button>
  );
};

let Item = ({ title, sourceName, readyInMinutes }) => (
  <div style={styles.item}>
    <h1 style={styles.title}>{title}</h1>
    <h2 style={styles.source}>{sourceName}</h2>
    <h3 style={styles.source}>{readyInMinutes} mins</h3>
  </div>
  );

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
},
item: {
  backgroundColor: '#bebebe',
  borderRadius: 10,
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 24,
  textAlign: 'center',
},
source: {
  fontSize: 16,
}
});

export default Feed;
