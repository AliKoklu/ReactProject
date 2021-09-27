import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Collapse,Navbar,NavbarToggler,Nav,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,
} from 'reactstrap';
import NAmerica from '../../../assets/pages/PortfolioPages/Holiday/NAmerica.js';
import Europe from '../../../assets/pages/PortfolioPages/Holiday/Europe.js';


function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>  setIsOpen(!isOpen);

    console.log(window.location.href);

    return (
        <Router>
            <Navbar color="light" light expand="md" className='holidayNavbar'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className='MenuItem'>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle  nav caret>
                                Asia
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/Holiday/Asia/">
                                China
                                </DropdownItem>
                                <DropdownItem href="/Holiday/Asia/">
                                Japan
                                </DropdownItem>
                                <DropdownItem href="/Holiday/Asia/">
                                South Korea
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                    <Nav navbar className='MenuItem'>
                    <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle  nav caret>
                                Europe
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/Holiday/Europe">
                                England
                                </DropdownItem>
                                <DropdownItem href="/Holiday/Europe">
                                France
                                </DropdownItem>
                                <DropdownItem href="/Holiday/Europe">
                                Germany
                                </DropdownItem>
                                <DropdownItem href="/Holiday/Europe">
                                Italy
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                    <Nav navbar className='MenuItem'>
                    <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle  nav caret>
                                N.America
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/Holiday/NAmerica/">
                                USA
                                </DropdownItem>
                                <DropdownItem href="/Holiday/NAmerica/">
                                Mexico
                                </DropdownItem>
                                <DropdownItem href="/Holiday/NAmerica/">
                                Canada
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                    <Nav navbar className='MenuItem'>
                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle  nav caret>
                                    S.America
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/Holiday/SAmerica/">
                                    Brazil
                                    </DropdownItem>
                                    <DropdownItem href="/Holiday/SAmerica/">
                                    Argentina
                                    </DropdownItem>
                                    <DropdownItem href="/Holiday/SAmerica/">
                                    Chile
                                    </DropdownItem>
                                    <DropdownItem href="/Holiday/SAmerica/">
                                    Peru
                                    </DropdownItem>
                                </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                </Collapse>
            </Navbar>

            <Switch>
                <Route path="/Holiday/Europe"  component={Europe} /> 
                <Route path="/Holiday/SAmerica"  component='' /> 
                <Route path="/Holiday/NAmerica/"  component={NAmerica} /> 
                <Route path="/Holiday/Asia"  component='' /> 
            </Switch>
        </Router>
    )
}

export default Navigation;