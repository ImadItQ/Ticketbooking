import React from 'react';

import classes from './SideItem.css';

const SideItem = ( props ) => (
    <ul className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
    </ul>
);

export default SideItem;