/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TeamLogos} from '../../../holidayData/scheduleData.js';


function Schedule(){

    const [TeamNameInput, setTeamNameInput] = useState('');
    const [CountryNameInput, setCountryNameInput] = useState('');
    const [Teams , SetTeams] = useState([]);
    const [isTeamExistInPage , SetisTeamExistInPage] = useState(true);
    
    function isTeamExist() {


            const teamExist= Teams.TeamNameInput === TeamNameInput;
            console.log(Object.values(Teams) , ' Teams.TeamNameInput');
            console.log(teamExist , 'teamExist')
            if(teamExist){
                console.log(isTeamExistInPage , 'false')
                SetisTeamExistInPage(false);
            }else{
                console.log(isTeamExistInPage , 'true')
                SetisTeamExistInPage(true);
            }
    }

        useEffect(() => {
            Teams.find(isTeamExist);
            return () => {
                'dfg'
            }
        })
    
    const handleSubmit= (e) =>{
        e.preventDefault();
        
        console.log(isTeamExistInPage , 'isTeamExistInPage');

        for(let i =0 ; i< Teams.length ; i++){
               
                    if(Teams[i].TeamNameInput===TeamNameInput){
                            console.log('This is in the list idiot');
                            SetisTeamExistInPage(false);
                            setTeamNameInput('');
                            setCountryNameInput('');
                            console.log(isTeamExistInPage,'if')
                            break;
                    }else if(i=== Teams.length-1){
                            console.log('else if')
                            SetisTeamExistInPage(true);
                            break;
                    }
        };

        console.log(isTeamExistInPage , 'asdasd');

        if(isTeamExistInPage && TeamNameInput && CountryNameInput){
                    const person = {id: new Date().getTime().toString(),TeamNameInput , CountryNameInput};
                    SetTeams((machTeam)=>[...machTeam, person]);            
                    setTeamNameInput('');
                    setCountryNameInput('');
            
        }else{
            console.log('enter both field idiot');
        }

    }
   
    const removeIcon = () => {


    }

    return (
        <article>
            {Teams.map((eachTeam , index) =>
            (
                    <div className='ScheduleCards' key={eachTeam.id}>
                        <button type="button" className="btn-close"  aria-label="Close" onClick={removeIcon}/>
                        <img className='scheduleCardImage' src={TeamLogos[eachTeam.TeamNameInput].src} alt='nah alirsin'/>
                        <h4>{eachTeam.TeamNameInput}</h4>
                        <p>{eachTeam.CountryNameInput}</p>
                    </div>
            ))}

            <form className='form' onSubmit={handleSubmit} >
                <div className='form-control' >
                    <label htmlFor='firstName'> TeamName </label>
                    <input
                        type='text'
                        id='firstName'
                        className='eachInputInSchedule'
                        name='firstName'
                        value={TeamNameInput}
                        onChange={(e) => setTeamNameInput(e.target.value)}
                    />
                </div>
                <div className='form-control' >
                    <label htmlFor='CountryName'> CountryName: </label>
                    <input
                        type='text'
                        className='eachInputInSchedule'
                        id='firstName'
                        name='firstName'
                        value={CountryNameInput}
                        onChange={(e) => setCountryNameInput(e.target.value)}
                    />
                </div>
                <button className='scheduleButton' type='submit'> Add</button>
            </form>
            
        </article>
    )
}

export default Schedule
