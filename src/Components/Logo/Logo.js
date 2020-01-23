import React from 'react';
import MyLogo from '../../img/bkmslogo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
    <img src={MyLogo} alt="MyShow" />
    </div>

)

export default Logo;