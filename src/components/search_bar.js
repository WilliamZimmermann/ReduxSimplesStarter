import React, { Component } from 'react';

//We take all functionalities that React.Component class give us
class SearchBar extends Component{
    // This is a method called render, it's a little bit different of normal javascript methods
    render(){
        return <input/>;
    }
}

// Any file that import this file (search_bar.js) will import the component SearchBar too
export default SearchBar;