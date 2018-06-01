import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Customized components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCnhstiigCk-NDfJOEFAce-vBJQ95YX5iE';

// Create a new class component. This component should produce some HTML
class App extends Component{
    constructor(props){ 
        //To know more about state and this constructor, take a look in components/search_bar.js
        super(props);

        this.state = { videos: [] };

        // API
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
            // This is the same that this.setState({ videos: videos });
        });
    }
    render(){
        return(
            <div>
                <SearchBar></SearchBar>
            </div>
        ); //This is a JSX nottaion
    }
}

// Take this component's generated HTML and put it on th epage (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 
// In index.html we have a div named "container". React will put in that container our code