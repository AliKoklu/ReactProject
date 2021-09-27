import React ,{Component} from 'react'
import HolidayNavigation from '../../../components/PortfolioComponent/HolidayComponent/Navigation.js';
import HolidayOptions from '../../../components/PortfolioComponent/HolidayComponent/HolidayOptions.js';
import {AllHoliday} from '../../../holidayData/AllHoliday.js';

class Holiday extends Component {
    
    render() {
        const myholiday = {AllHoliday};

        return(
        <div className='container'>
            <HolidayNavigation/>
            <hr />
            <h1>Top Deals</h1>
            <HolidayOptions holidayData= {myholiday.AllHoliday.holidays.HomePage} whichPage='HomePage'/>
        </div>
        )
    }
}

export default Holiday;