import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
 
export default function Card(props) {
    const {imageSource , PictureText , location} = props;
 

    console.log(location);
    return (
        <Router>
            <div className="column" >
                <div>
                    <Link  className='aforCard' to={location}>
                        <img className='cardImage' src={imageSource} alt='nothing' />
                    </Link>
                    <p  className='cardFooter'>{PictureText}</p>
                </div> 
            </div>
        </Router>
    )
}
