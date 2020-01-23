import React, { Component } from 'react';
import SideItems from './SidebarItems/SideItems';
import classes from './Sidebar.css';
class Sidebar extends Component {
    render(){
        return(
            <div>
                <h2>Trending Searches</h2>
                <div className={classes.Sidebar}>
                    <ul className={classes.DesktopOnly}>
                        <SideItems />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;