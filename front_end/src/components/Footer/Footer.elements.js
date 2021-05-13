import styled from 'styled-components';
import { IoBeer } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: red;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    background: red;
`;

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 550px) {
        justify-content: center;
    }
`;

export const ProjectLogoLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (max-width: 550px) {
        display: none;
    }
`;

export const ProjectLogoIcon = styled(IoBeer)`
    margin-right: 10px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    cursor: pointer;
    font-size: 16px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5em;

    &:hover {
        border-bottom: 1px solid #fff;
    }

    @media screen and (max-width: 550px) {
        font-size: 2.5em;
    }
`;