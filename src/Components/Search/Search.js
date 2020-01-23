import React, { Component } from 'react';
import classes from './Search.css';
class Search extends Component{

    render(){
        return(
            <input type="text" placeholder="Search for Movies, Events, Plays Sports and Activities" className={classes.Search}/>
        );
    }
}
export default Search;