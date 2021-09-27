import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import Home from '../assets/pages/Home.js';
import About from '../assets/pages/About.js';
import Contact from '../assets/pages/Contact.js';
import Holiday from '../assets/pages/PortfolioPages/Holiday.js';
import Schedule from '../assets/pages/PortfolioPages/Schedule.js';


function NavBar() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <Navbar color="light" light expand="md">
                <NavbarBrand className='MenuItem' href="/">Home</NavbarBrand>
                <NavbarBrand className='MenuItem' href="/Contact">Contact</NavbarBrand>
                <NavbarBrand className='MenuItem' href="/About">About</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className='MenuItem'>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle  nav caret>
                                Port
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/Holiday/">
                                Holiday
                                </DropdownItem>
                                <DropdownItem href="/Schedule/">
                                Schedule
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                
                </Collapse>
            </Navbar>
 
            <Switch>
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />    
                <Route path="/Schedule" component={Schedule} />    
                <Route path="/" exact component={Home} />  
                <Route path="/Holiday" exact component={Holiday} />  
            </Switch>
        </Router>
    )
}

export default NavBar;