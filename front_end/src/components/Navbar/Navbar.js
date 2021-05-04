import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    Revac_Project
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/articles'>
                            Articles
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/abour-us'>
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItemBtn>
                        <NavBtnLink to="/join">
                            <Button>
                                Join Us
                            </Button>
                        </NavBtnLink>
                    </NavItemBtn>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;

