import React from 'react'


function ScheduleCards(props) {

    const {TeamName , CountryName , teamLogo} = props;

    console.log(props);
    console.log(TeamName , 'teamName');
    console.log(CountryName, 'country Name');
    console.log(teamLogo, 'Logo');

    return (
        <>
            <div className='ScheduleCards'>
                <img className='scheduleCardImage' src={teamLogo} alt='nah alirsin'/>
                <p className='ScheduleCardText'>{TeamName}</p>
                <p className='ScheduleCardText'>{CountryName}</p>
            </div>
        </>
    )
}

export default ScheduleCards;