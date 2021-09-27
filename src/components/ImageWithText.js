import React from 'react'
import { Container } from 'react-bootstrap';
import Images from './images.js';
 
export default function ImageWithText(props) {
    console.log(props);
    const {conatinerClassName, imageSource,imageClassName,pText,hthreeText} = props;
    return (
          <Container className={conatinerClassName}>
                <figure className='position-relative'>
                    <Images imageSource={imageSource} classname={imageClassName}/>
                    <figcaption  >
                        <p>{pText}</p>
                        <h3>{hthreeText}</h3>
                    </figcaption>
                </figure>
            </Container>
    )
}


