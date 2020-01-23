import React from 'react';

import classes from './Offers.css';
import SubItem from '../SubItem/SubItem';

const Offers = () => (
    <ul className={classes.NavigationItems}>
        <SubItem link="/">Corporates</SubItem>
        <SubItem link="/">Offers</SubItem>
        <SubItem link="/">Gift Cards</SubItem>
    </ul>
);

export default Offers;