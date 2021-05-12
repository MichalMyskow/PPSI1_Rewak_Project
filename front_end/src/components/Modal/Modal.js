import React, { useRef, useEffect, useCallback, useState, SyntheticEvent } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Background, ModalWrappper, CloseModalButton, Login, LoginContainer, BtnContainer, ButtonForLogin } from './Modal.elements';

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const [hasAccount, setHasAccount] = useState(false);

    const [redirect, setRedirect] = useState('');

    // const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');

    const cleanInputs = () => {
        setUsername('');
        setPassword('');
        setEmail('');
        setFirstname('');
    };

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    //sign up - ang. zapisz się
    const handleSingUp = () => {

        e.preventDefault();

        const response = await fetch('http://blogapi.local/api/login_check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password,
                email,
                firstname
            })
        });

        const content = await response.json();
        localStorage.setItem("JWT", content.token);
        console.log(response);

        localStorage.removeItem("name of the item");

        setRedirect(true);
    };

    //sign in - ang. zaloguj się
    const handleSingIn = () => {

        e.preventDefault();

        const response = await fetch('http://blogapi.local/api/users?page=1', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        const content = await response.json();
        localStorage.setItem("JWT", content.token);
        console.log(response);

        localStorage.removeItem("name of the item");

        setRedirect(true);
    }

    // po prostu wywal
    // useEffect(() => {
    //     (
    //         async () => {
    //             const response = await fetch('http://blogapi.local/api/users/15',{
    //                 method: 'GET',
    //                 headers: {'Content-Type': 'application/json', 'Authorization': 'BEARER '+ localStorage.getItem('JWT') },
    //                 credentials: 'include',
    //             });
    //             const content = await response.json();
    //             setUsername(content.username);
    //         }
    //     )();
    // });

    //moje eksperymentalne, usuń jak zobaczysz
    //sign up - ang. zapisz się
    // const handleSingUp = () => {
    //
    //     console.log("Sign Up done" + username + password);
    //     axios({
    //         method: 'post',
    //         url: 'http://blogapi.local/api/users',
    //         headers: { 'Content-Type': 'application/json' },
    //         credentials: 'include',
    //         data: {
    //             username: username,
    //             password: password,
    //             email: email,
    //             firstName: firstname
    //         }
    //     })

    // }

    //moje eksperymentalne, usuń jak zobaczysz
    //sign in - ang. zaloguj się
    // const handleSingIn = () => {
    //
    //     console.log("Sign In done" + username + email + username + password);

    //     axios({
    //         method: 'post',
    //         // url: 'http://blogapi.local/api/users',
    //         url: 'API/login_check',
    //         responesType: 'stream'
    //     }).then(resp => resp.json())
    //         .then(resp => console.log)
    //         .then(resp => resp.json())
    //         // .then(resp => setArticles(resp))
    //         .then(resp => console.log(resp))
    // }


    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);



    return (
        <>
            {showModal ?
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrappper>
                        <Login>
                            <LoginContainer>
                                {hasAccount ? (
                                    <>
                                        <label>Username</label>
                                        <input
                                            type='text'
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <label>Password</label>
                                        <input
                                            type='password'
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </>
                                ) : (
                                        <>
                                            <label>First Name</label>
                                            <input
                                                type='text'
                                                autoFocus
                                                required
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                            />
                                            <label>Email</label>
                                            <input
                                                type='text'
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label>Username</label>
                                            <input
                                                type='text'
                                                required
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                            <label>Password</label>
                                            <input
                                                type='password'
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </>
                                    )}
                                <BtnContainer>
                                    {hasAccount ? (
                                        <>
                                            <button onClick={handleSingIn}>Sing in</button>
                                            <p>Don't have an account<span onClick={() => { setHasAccount(!hasAccount) }}>Sign up</span></p>
                                        </>
                                    ) : (
                                            <>
                                                <button onClick={handleSingUp}>Sing up</button>
                                                <p>Have an account?<span onClick={() => { setHasAccount(!hasAccount) }}>Sign in</span></p>
                                            </>
                                        )}
                                </BtnContainer>
                            </LoginContainer>
                        </Login>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(!showModal)} />
                    </ModalWrappper>
                </Background>
                : null}
        </>
    );
};

export default Modal;
