import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Background, ModalWrappper, CloseModalButton, Login, LoginContainer, BtnContainer } from './Modal.elements';
import jwt_decode from 'jwt-decode';

const Modal = ({ showModal, setShowModal, showAdminTab, showLogoutTab }) => {
    const modalRef = useRef();
    const [hasAccount, setHasAccount] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstname] = useState('');

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };
    //sign up - ang. zapisz się
    const handleSingUp = async () => {
        await fetch('http://blogapi.local/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                email,
                username,
                password
            })
        });
        setHasAccount(true);
    };


    //sign in - ang. zaloguj się
    const handleSingIn = async () => {
        const response = await fetch('http://blogapi.local/api/login_check', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });
        const content = await response.json();
        localStorage.setItem("JWT", content.token);
        //localStorage.removeItem("name of the item")
        if (localStorage.getItem("JWT") !== 'undefined') {
            setShowModal(false);
            // const token = localStorage.getItem("JWT");
            const decoded = jwt_decode(localStorage.getItem("JWT"));
            console.log(decoded);
            if (decoded.username === "admin") {
                showAdminTab();
            }
            showLogoutTab();
        }
    }

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
                                            autoFocus
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
                                                value={firstName}
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
