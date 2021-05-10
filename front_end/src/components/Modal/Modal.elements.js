import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
    width: 100%;
    /* width: 1000px; */
    height: 100%;
    /* height: 1000px; */
    background: rgba(255,40,0,0.2);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const ModalWrappper = styled.div`
    width: 800px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.8);
    background: #fff;
    color: #000;
    display: flex;

    position: relative;
    z-index: 10;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    color: #fff;
`;

export const Login = styled.section`
    width: 100%;
    height: 100%;
    min-height: 50vh;
    background: #e9e9e9;
    display: flex;
`;
export const LoginContainer = styled.div`
    padding: 60px;
    width: 100%;
    /* max-width: 520px; */
    /* min-height:600px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
    ); */
    background: radial-gradient(
    ellipse at left bottom,
    rgba(75, 9, 8, 1) 0%,
    rgba(131, 16, 14, 0.9) 59%,
    rgba(98, 25, 0, 0.9) 100%
    );
    box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

    label {
        color: white;
        margin: 14px 0;
        display: block;
        font-size: 22px;
        line-height: 1;
    }
    input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 19px;
        padding: 10px;
        background: rgba(255,255,255,0.1);
        color: #fff;
        letter-spacing: 1px;
    }
`;

export const BtnContainer = styled.div`
    width: 100%;
    padding: 24px 0;

    p{
        margin: 14px 0 0 0;
        text-align: right;
        color: #fff;
    }
    span{
        color: yellow;
        font-weight: 500;
        letter-spacing: 0.5px;
        margin-left: 5px;
        cursor: pointer;
        transition: all 400ms ease-in-out;
    }
    span:hover {
        color: red;
    }
    button{
        border: none;
        outline: none;
        width: 100%;
        padding: 15px 0;
        color: #fff;
        font-size: 16px;
        letter-spacing: 1px;
        background: #603bbb;
        cursor: pointer;
    }
`;

// export const ButtonForLogin = styled.button`
//     border: none;
//   outline: none;
//   width: 100%;
//   padding: 15px 0;
//   color: #fff;
//   font-size: 16px;
//   letter-spacing: 1px;
//   background: #603bbb;
//   cursor: pointer;
// `;