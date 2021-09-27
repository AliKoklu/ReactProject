import React from 'react'

export default function ContactPageInputs(props) {
    
    const {paragraphLabel , inputPlaceHolder} = props;
    return (
        <div className='contactForm'>
                <p className='contactPageParag'>{paragraphLabel}</p>
                <input className='conctactPageInput' placeholder={inputPlaceHolder}/>
        </div>
    )
}
