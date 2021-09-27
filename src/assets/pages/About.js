import React from 'react'
import aboutUs from '../images/mypict4.jpeg';

export default function About() {


    return (
        <>
            <div className='container'>
                <img className='aboutUsImage' src={aboutUs} alt='nothning'/>
                <p className='AbuotUsText'> Experience in Creating Test Scenarios, writing and executing Test Cases, Manual Testing and Automated Testing, Defect Tracking, Test Coverage and Test Summary Reports and well versed in different management scenarios like Quality Assurance.Designed and executed Automation Test Scripts using Selenium WebDriver with Java and TestNG.
                    Experienced in creating Smoke, Regression and Functional Test Cases in Selenium WebDriver with Java programming language.
                    Expert in Object Identification in Selenium WebDriver using XPath, CSS Selectors, HTML ID and Tag.
                    Expert in developing Behavior Driven development (BDD) by writing Gherkin language using Cucumber tool, developed Scenarios, Scenario outlines, features and Step definitions and generating the Cucumber reports.
                </p>
            </div>
        </>
    )
}
