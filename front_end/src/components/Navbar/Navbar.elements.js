import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoBeer } from 'react-icons/io5';

export const Nav = styled.nav`
    background: red;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;

    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
`;

export const NavIcon = styled(IoBeer)`
    font-size: 1.5em;
    margin-right: .25rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transform: all 0.5s ease;

        /* background: #101522; */ //opcjonalny kolor
        background: red;
        /* border: 1px solid #000; */
        /* color: #000; */
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 5px solid transparent;

        &:hover {
            border-bottom: 5px solid #fff; //#4b59f7
        }

        @media screen and (max-width: 960px) {
            width: 100%;

            &:hover {
                border: none;
            }
        }


`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            background-color: #0a0d14;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`

    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    /* border-bottom: 5px solid transparent; */
`;