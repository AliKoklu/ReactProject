import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import footballImage from '../assets/images/football.jpg';
import kayaking from '../assets/images/kayaking.jpg';
import photography from '../assets/images/photography.jpg';
import roadtrip from '../assets/images/roadtrip.jpg';
import biking from '../assets/images/biking.jpg';
import Hiking from '../assets/images/Hiking.jpg';
import Card from './Card';

export default function Cards() 
{
    return (
        <Router className="eachCard row" >
            <div>
                <Card location='/' imageSource={footballImage} PictureText='Football, Click me' />
                <Card location='/' imageSource={kayaking} PictureText='Kayaking, Click me' />
                <Card location='/' imageSource={photography} PictureText='Photography, Click me' />
                <Card location='/' imageSource={roadtrip} PictureText='Roadtrip, Click me' />
                <Card location='/' imageSource={biking} PictureText='Biking, Click me' />
                <Card location='/' imageSource={Hiking} PictureText='Hiking, Click me' />
            </div>
        
        
        </Router>
    )
}
