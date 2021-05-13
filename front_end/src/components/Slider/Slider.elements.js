import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export const SliderSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const SliderSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const SliderSlider = styled.div`
    position: absolute;
    /* position: relative; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        width: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
    }
`;

export const SliderImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export const SliderContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1{
        font-size: clamp(2rem, 2.5rem, 2.7rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 3px 3px 5px #000;
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        text-shadow: 3px 3px 5px #000;
        margin-bottom: 1.2rem;
        font-size: 1.4rem;
    }
`;

export const SliderBtnLink = styled(Link)`
    background: #ff0000;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px 40px;
    color: #fff;
    font-size: 20px;

    border-radius: 30px;

    &:hover{
        transform: translateY(-2px);
        background: #ba0000;
    }
`;

export const Arrow = styled(BsArrowRightShort)`
    font-size: 1.25em;
    margin-left: 0.5rem;
`;

export const SliderButtons = styled.div`
    position: absolute;
    right: 50px;
    bottom: 100px;
    display: flex;
    z-index: 10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: red;
    border-radius: 30px;
    padding: 3px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: red;
        transform: scale(1.05);
    }
`;

export const PrevArrow = styled(MdKeyboardArrowLeft)`
    ${arrowButtons}
`;

export const NextArrow = styled(MdKeyboardArrowRight)`
    ${arrowButtons}
`;
