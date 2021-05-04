import styled from 'styled-components';
import { IoBeer } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: red;
    padding: 4rem 0 2 rem 0;
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
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;

    &:hover {
        border-bottom: 1px solid #fff;
    }
`;