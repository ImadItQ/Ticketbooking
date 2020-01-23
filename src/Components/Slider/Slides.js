import React, { Component } from 'react';
import classes from './Slides.css';
import img1 from '../../img/bkms4.jpg';
import img2 from '../../img/bkms5.jpg';
import img3 from '../../img/bkms6.webp';
import img4 from '../../img/bkms7.webp';
class Slides extends Component {
    render() {
        return(
            <div className={classes.Slider}>
                <div className={classes.Slide}>
                <img src={img4} alt="fourth" width="100%" id="last-clone" />
                <img src={img1} alt="first" width="100%"  />
                <img src={img2} alt="second" width="100%" />
                <img src={img3} alt="third" width="100%" />
                <img src={img4} alt="fourth" width="100%" />
                <img src={img1} alt="first" width="100%" id="last-clone" />
                </div>
            </div>
        );
    }
}

export default Slides;