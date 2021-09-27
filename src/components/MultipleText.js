import React from 'react'
import {myBackgroundPoints} from '../myBackgroundPoints.js';


export default function MultipleText() {

    const [backgrounPoints, setPeople] = React.useState(myBackgroundPoints);

    console.log(backgrounPoints.length);
    


    return (
        <>
                {backgrounPoints.map((eachPoint)=>{
                    console.log(eachPoint)
                    const {id , points}= eachPoint;
                    return(
                    <div key={id}>
                        <p >{points}</p>
                    </div>
                    );   
                })}
        </>
    )
}