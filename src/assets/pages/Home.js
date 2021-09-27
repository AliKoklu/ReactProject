import React from 'react';
import headerimage from '../images/newyork.jpg';
import ImageWithText from '../../components/ImageWithText.js';
import myImage from '../images/mypict5.jpeg';
import MultipleText from '../../components/MultipleText';
import Cards from '../../components/Cards';

export default function Home() {
  
    return (
        <>
            <ImageWithText imageClassName='homePageimage img-fluid' imageSource={headerimage} pText='Freelance UI web developer' hthreeText='Welcome to my life. You can find my background, hobbies and more in here.' />
            <hr/>
            <div>
                <ImageWithText  conatinerClassName='imageMoveLeft' imageSource={myImage} imageClassName='imageleftheightAndWidth' hthreeText/>
                <div className='myBackgroundText'>
                    <h1>My background and Education</h1>
                    <div>
                        <MultipleText/>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <h1 className='hobiesText'>My hobies</h1>
                <Cards/>
            </div>
        </>
    )
} 


