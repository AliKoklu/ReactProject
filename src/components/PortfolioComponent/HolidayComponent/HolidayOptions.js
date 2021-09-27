import React, {Component}from 'react'

class  HolidayOptions extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const { holidayData  } = this.props;
        

        return (
            <div>
                <table border="2">
                    {holidayData.map((data) => (
                        <>
                            <tr className='EachRow'>
                                <td className='CountryAndPrice'><tr>{data.CountryName}</tr>
                                <hr/>
                                <tr>Price: {data.Price}</tr>
                                </td>
                                <td><img src={data.imgSource} alt='nah alirsin'/></td>
                                <td>{data.CountryDetail}</td>
                                <td><button className='btn-success' type='button'> More Details</button></td>
                            </tr>
                        </>
                        ))}
                </table>
        </div>
    )
    }
}

export default HolidayOptions;