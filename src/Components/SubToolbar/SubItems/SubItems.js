import React from 'react';

import classes from './SubItems.css';
import SubItem from '../SubItem/SubItem';

const SubItems = () => (
    <ul className={classes.NavigationItems}>
        <SubItem link="/">Movies</SubItem>
        <SubItem link="/">Events</SubItem>
        <SubItem link="/">Plays</SubItem>
        <SubItem link="/">Sports</SubItem>
        <SubItem link="/">Activities</SubItem>
        <SubItem link="/">Monuments</SubItem>
        <SubItem link="/">Fanhood</SubItem>
        <SubItem link="/">Buzz</SubItem>
    </ul>
);

export default SubItems