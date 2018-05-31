import React from 'react';
import ReactDOM from 'react-dom';

// Customized components
import SearchBar from './components/search_bar';

// Youtube API Key
const API_KEY = 'AIzaSyCnhstiigCk-NDfJOEFAce-vBJQ95YX5iE';

// Create a new component. This component should produce some HTML
const App = function(){
    return (
        <div>
            <SearchBar></SearchBar>
        </div>
    ); //This is a JSX nottaion
}

// Take this component's generated HTML and put it on th epage (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 
// In index.html we have a div named "container". React will put in that container our code