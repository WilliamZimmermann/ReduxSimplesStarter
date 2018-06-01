import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Customized components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCnhstiigCk-NDfJOEFAce-vBJQ95YX5iE';

//Function to test API
YTSearch({ key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

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