import React, { Component } from 'react';

//We take all functionalities that React.Component class give us
class SearchBar extends Component{
    // This is a method called render, it's a little bit different of normal javascript methods
    render(){
        //This input, when change, will call our method onInputChange
        return <input onChange={this.onInputChange} />;
    }

    //We will create another method, to be called when the input change
    onInputChange(event){ //This method name could be quandoOInputMudar... Also the attribute
        console.log(event.target.value); //Show in browser console the value
    }
}

// Any file that import this file (search_bar.js) will import the component SearchBar too
export default SearchBar;