import React, { Component } from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

class Toolbar extends Component {
    render(){
        return(
            <header className={classes.Toolbar}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div>
                    <Search />
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        );
    }
       
}
    

export default Toolbar;