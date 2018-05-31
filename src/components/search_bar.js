import React, { Component } from 'react';

//We take all functionalities that React.Component class give us
class SearchBar extends Component{
    constructor(props){
        // As Component already have his own constructor, we must to call super
        super(props);
        // We will record a object called state ever time that we call a funcion
        this.state = {
            term: ''
        }; //You can set the state using the native method setState()...
    }

    // This is a method called render, it's a little bit different of normal javascript methods
    render(){
        //This input, when change, will call our method onInputChange
        return (
            <div>
                <input onChange={event => this.setState({term: event.target.value}) } />
                Value of the input: {this.state.term}
            </div>
        );
    }
}

// Any file that import this file (search_bar.js) will import the component SearchBar too
export default SearchBar;