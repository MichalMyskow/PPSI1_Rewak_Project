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
	NavBtnLink,
} from './Navbar.elements';
import jwt_decode from 'jwt-decode';

const Navbar = ({
	openModal,
	showAdmin,
	showLogout,
	handleLogout,
	setShowAdmin,
	setShowLogout,
}) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	if (localStorage.getItem('JWT') !== null) {
		setShowLogout(true);
		const decoded = jwt_decode(localStorage.getItem('JWT'));
		if (decoded.username === 'admin') {
			setShowAdmin(true);
		}
	}

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
						<NavLink to='/'>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/articles'>Articles</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to='/about-us'>About Us</NavLink>
					</NavItem>
					{showAdmin ? (
						<NavItem>
							<NavLink to='/admin'>Admin</NavLink>
						</NavItem>
					) : null}

					<NavItemBtn>
						{showLogout ? (
							<NavBtnLink to='/'>
								<Button onClick={handleLogout}>Logout</Button>
							</NavBtnLink>
						) : (
							<NavBtnLink to='/'>
								<Button onClick={openModal}>Sing In/Up</Button>
							</NavBtnLink>
						)}
					</NavItemBtn>
				</NavMenu>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
