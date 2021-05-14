import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 500px;
    justify-content: center;
    align-items: left;
    padding: 15px;
    margin: auto;
    overflow: hidden;
    background: red;
`;

const Row = styled.div`
    /* border: 1px solid #000; */
    display: flex;
    position: relative;
    margin: 15px;
    color: #fff;
    font-size: 2rem;
    padding: 20px 10px;
    cursor: pointer;
    /* justify-content: center;
    align-items: center; */

    &:hover {
        background-color: #a71100;
    }
`;

const RowLink = styled.a`
    /* border: 1px solid #fff; */
    display: flex;
    text-decoration: none;
    color: #fff;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

`;

const AboutUs = () => {
    return (
        <Background>
            <Row>
                <RowLink href='https://github.com/sbacanski0730' target="_blank">
                    Szymon Bacanski
                </RowLink>
            </Row>
            <Row>
                <RowLink href='https://github.com/MichalMyskow' target="_blank">
                    Michał Myśków
                </RowLink>
            </Row>
            <Row>
                <RowLink href='https://github.com/Gelczynski' target="_blank">
                    Jakub Gelczyński
                </RowLink>
            </Row>
        </Background>
    )
}

export default AboutUs;
