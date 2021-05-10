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
import Modal from '../Modal/Modal';


const Navbar = ({ showModal, setShowModal, openModal }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const [showModal, setShowModal] = useState(false);

    // const openModal = () => {
    //     setShowModal(!showModal);
    // }

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
                        <NavLink to='/about-us'>
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItemBtn>
                        <NavBtnLink /*to="/button"*/>
                            <Button onClick={openModal}>
                                Sing In/Up
                            </Button>
                            {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
                        </NavBtnLink>
                    </NavItemBtn>
                </NavMenu>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;

