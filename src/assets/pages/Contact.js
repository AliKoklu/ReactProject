import React from 'react'
import ContactPageInputs from '../../components/ContactPageInputs.js'


const Contact=() => {
 
    const afterSubmit = () => <p>Dude you are not going to get my help lmao</p>;

    return (
        <div className='myContactForm'>
            <ContactPageInputs paragraphLabel='Name' inputPlaceHolder='First Name'/>
            <ContactPageInputs paragraphLabel='Last Name' inputPlaceHolder='Last Name'/>
            <ContactPageInputs paragraphLabel='Email' inputPlaceHolder='Email'/>
            <ContactPageInputs paragraphLabel='What do you want' inputPlaceHolder='what again'/>
            <div className='contactForm'>
                <button onClick={afterSubmit} className='submitButtonContactPage' type='button'>Dont submit</button>
            </div>
        </div>
    )
}


export default Contact;