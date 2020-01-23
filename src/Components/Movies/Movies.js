import React, { Component } from 'react';
import Movie1 from '../../img/bkms1.jpg';
import Movie2 from '../../img/bkms2.jpg';
import Movie3 from '../../img/bkms3.jpg';
import Movie4 from '../../img/bkms10.jpg';
import Movie5 from '../../img/bkms11.jpg';
import classes from './Movies.css';
class Movies extends Component {
    render(){
        return(
            <div className={classes.images}>
                <h2 className={classes.h2}>Movies</h2>
             <div className={classes.gallery}>
             <img src={Movie1} alt="Cinque Terre" width="600" height="400"/>
            <div className={classes.desc}>Ala Vaikuntapuramullu
            <p> UA | Action | Telugu</p>
            </div>
            </div>

            <div className={classes.gallery}>
             <img src={Movie2} alt="movie 2" width="600" height="400"/>
            <div className={classes.desc}>Tanhaji:The Unsung Warrior
            <p>UA | Action | Hindi</p>
            </div>
            </div>
            <div className={classes.gallery}>
             <img src={Movie3} alt="movie 3" width="600" height="400"/>
            <div className={classes.desc}>Sarileru Nikeevvaru
            <p>UA | Action | Telugu</p>
            </div>
            </div>
            <div className={classes.gallery}>
             <img src={Movie4} alt="movie 4" width="600" height="400"/>
            <div className={classes.desc}>Wild Karnataka
            <p>U | Drama | English</p>
            </div>
            </div>
            <div className={classes.gallery}>
             <img src={Movie5} alt="movie 5" width="600" height="400"/>
            <div className={classes.desc}>Street Dancer 3D
            <p>UA | Drama | Hindi</p>
            </div>
            </div>
            </div>
        );
    }
}

export default Movies;