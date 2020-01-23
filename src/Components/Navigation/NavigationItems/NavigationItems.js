import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Location</NavigationItem>
        <NavigationItem link="/">Language</NavigationItem>
        <button className={classes.button}><NavigationItem link="/">Sign In</NavigationItem></button>
    </ul>
);

export default navigationItems;