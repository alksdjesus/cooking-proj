import React, {Component, useState} from 'react';
import axios from 'axios';

// class Search extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: [],

//     //   isLoading: true,
//     //   searchText: '',
//     //   apiKey: '&apiKey=3f0cc431643b4e64ac67118fd14f646b',
//     //   baseSearchURL: 'https://api.spoonacular.com/recipes/complexSearch?number=10&query=',
//         someLink: "https://api.spoonacular.com/recipes/complexSearch?number=10&query=berry&apiKey=3f0cc431643b4e64ac67118fd14f646b"

//       };
  
//     //   this.handleChange = this.handleChange.bind(this);
//     //   this.handleSubmit = this.handleSubmit.bind(this);
//         this.getRecipes = this.getRecipes.bind(this);
//     }

//     getRecipes = () => {
//         console.log(this.state.someLink)
//         this.setState({someLink: "hi"})
//         console.log(this.state.someLink)
    //     fetch("https://reactnative.dev/movies.json")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //         this.setState({
    //             data: result.movies
    //         });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //         this.setState({
    //             error
    //         });
    //         }
    //   )


//         // this.setState({someLink: 'hi'})
//         // console.log(this.state.someLink);
//       }

//     handleChange(event) {
//       this.setState({searchText: event.target.value});
//     }
  
//     // handleSubmit(event) {
//     //     event.preventDefault();
//     //     this.getRecipes();
//     // }
  
//     render() {
//       return (
//         <form onSubmit={this.getRecipes}>
//           <label>
//             Name:
//             <input type="search" value={this.state.searchText} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Search" />
//         </form>
//       );
//     }
//   }

// export default Search;

// class Search extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: [],
//         searchText: '',
//         someLink: 'https://api.spoonacular.com/recipes/complexSearch?number=10&query=berry&apiKey=3f0cc431643b4e64ac67118fd14f646b'
//       };
//       this.handleChange = this.handleChange.bind(this);

//     }

//     getRecipes = ({state, event}) => {
//         console.log(this.state.someLink)
//         this.setState({someLink: 'hi'})
//         console.log(this.state.someLink)
//         event.preventDefault();
//     }

//     handleChange(event) {
//         this.setState({searchText: event.target.value});
//     }
//     render() {
//       return (
//         <div>
//             <form onSubmit={event => this.getRecipes(event)}>
//                 <h1>{this.state.someLink}</h1>
//                 <label>
//                     Name:
//                 <input type="search" value={this.state.searchText} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Search" />
//             </form>
//         </div>
//       );
//     }
//   }


// export default Search;

function Search (props) { 
    var [someLink, setLink] = useState('text')
    var [searchText, setText] = useState('')
    let [data, setData] = useState([])
    var [apiKey, setKey] = useState('&apiKey=3f0cc431643b4e64ac67118fd14f646b')
    var [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/complexSearch?number=10&query=')
    const [error, setError] = useState(null);

    function getRecipes (event) { 
        setLink(someLink = baseSearchURL + searchText + apiKey)
        console.log(props)
        event.preventDefault()

        axios.get(`https://reactnative.dev/movies.json`)
        .then(res => {
            setData(data= res.movies);
        //   this.setState({ persons });
        })

    //     fetch('https://reactnative.dev/movies.json')
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //         setData(data = result)
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //         this.setState({
    //             error
    //         });
    //         }
    //   )

      console.log(data)

    }

    function handleChange(event) {
        setText(searchText = event.target.value);
    }

    return (
        <div>
            <h1>{someLink}</h1>
            <form onSubmit={getRecipes}>
                <label>Name:</label>
                <input type="search" value={searchText} onChange={handleChange} />
                <input type='submit' value="search"/>
            </form> 
        </div>
    )

}

export default Search;