import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Background, ModalWrappper, CloseModalButton, Login, LoginContainer, BtnContainer, ButtonForLogin } from './Modal.elements';

const Modal = ({ showModal, setShowModal, firstName, email, userName, password/*, hasAccount, setHasAccount*/ }) => {
    const modalRef = useRef();
    const [hasAccount, setHasAccount] = useState(false);

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
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
                                            required
                                            value={userName}
                                        />
                                        <label>Password</label>
                                        <input
                                            type='password'
                                            required
                                            value={password}
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
                                        />
                                        <label>Email</label>
                                        <input
                                            type='text'
                                            required
                                            value={email}
                                        />
                                        <label>Username</label>
                                        <input
                                            type='text'
                                            required
                                            value={userName}
                                        />
                                        <label>Password</label>
                                        <input
                                            type='password'
                                            required
                                            value={password}
                                        />
                                    </>
                                )}
                                <BtnContainer>
                                    {hasAccount ? (
                                        <>
                                            <button>Sing in</button>
                                            <p>Don't have an account<span onClick={() => { setHasAccount(!hasAccount) }}>Sign up</span></p>
                                        </>
                                    ) : (
                                        <>
                                            <button>Sing up</button>
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
