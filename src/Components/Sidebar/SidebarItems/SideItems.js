import React from 'react';

import classes from './SideItems.css';
import SideItem from '../SidebarItem/SideItem';

const SideItems = () => (
    <li>
        <ul className={classes.NavigationItems}>
    <SideItem link="/"> Street Dancer 3 (3D)
    <p>Movie</p>
    </SideItem>
    <SideItem link="/">Wild Karnataka
    <p>Movie</p>
    </SideItem>
    <SideItem link="/">Disco Raja
    <p>Movie</p>
    </SideItem>
    <SideItem link="/">Psycho(Tamil)
    <p>Movie</p>
    </SideItem>
    <SideItem link="/">1917
    <p>Movie</p>
    </SideItem>
    <SideItem link="/">Tanhaji :The Unsung Warrior 
    <p>Movie</p>
    </SideItem>
    </ul>
    </li>
);

export default SideItems;