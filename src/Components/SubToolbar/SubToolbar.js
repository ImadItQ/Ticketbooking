import React, { Component } from 'react';
import classes from './SubToolbar.css';
import SubItems from '../SubToolbar/SubItems/SubItems';
import Offers from './Offers/Offers';
class SubToolbar extends Component {
    render(){
        return(
            <div className={classes.SubToolbar}>
                  <nav className={classes.DesktopOnly}>
                    <SubItems />
                </nav>
                <nav className={classes.DesktopOnly}>
                    <Offers />
                </nav>
            </div>
        );
    }
}

export default SubToolbar;