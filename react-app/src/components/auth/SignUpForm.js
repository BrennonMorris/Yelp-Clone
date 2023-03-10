import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import { Modal } from '../../context/Modal';
import party from '../../icons/login.png';
import broken from '../../icons/broken.png';
import './SignUpForm.css';
import './LoginForm.css';

const SignUpForm = () => {
    const url = useLocation().pathname;
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [showLogModal, setShowLogModal] = useState(false);
    const [showSignModal, setShowSignModal] = useState(false);
    const [hasSubmitSign, setHasSubmitSign] = useState(false);
    const [hasSubmitLog, setHasSubmitLog] = useState(false);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        let errs = []
        if (first_name.length < 2) errs.push('First name must be at least 2 characters.')
        if (last_name.length < 2) errs.push('Last name must be at least 2 characters.')
        if (username.length <5) errs.push('Username must be at least 5 characters.')
        if (!email.includes('@') || !email.includes('.')) errs.push('Must sign up with a valid email.')
        if (password.length < 5) errs.push('Password must be at least 6 characters.')
        let zipreg = /^[0-9]{5}(?:-[0-9]{4})?$/;
        if (!zipreg.test(zipcode)) errs.push('Please input a valid zipcode.')
        if (errs.length > 0) {
            setErrors(errs)
            setHasSubmitSign(true)
        }

        else if (password) {
            setHasSubmitSign(true);
            const data = await dispatch(signUp(username, first_name, last_name, email, password, zipcode));
            if (data) {
                // console.log('SIGNUP ERRORS', data)
                setErrors([data.message ?? data.username])
            }
        }
    };

    const onLogin = async (e) => {
        e.preventDefault();
        setHasSubmitLog(true);
        const data = await dispatch(login(email, password));
        if (data) {
            // console.log('LOGIN ERRORS', data)
            setErrors(['The email address or password you entered is incorrect.']);
        }
    };


    // const updateFirstname = (e) => {
    //     setFirstname(e.target.value);
    // };

    // const updateLastname = (e) => {
    //     setLastname(e.target.value);
    // };

    // const updateEmail = (e) => {
    //     setEmail(e.target.value);
    // };

    // const updatePassword = (e) => {
    //     setPassword(e.target.value);
    // };

    // const updateZipCode = (e) => {
    //     setZipCode(e.target.value);
    // };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <>
    {/* -----------------------------LOG IN MODAL----------------------------- */}
            <button className={url === '/' ? 'login-button session-buttons' : 'login-button-blk session-buttons'} onClick={() => { setShowLogModal(true) }}>
                <span className={url === '/' ? 'session-butt-word login-word' : 'session-butt-word login-word-blk'}>
                    Log In
                </span>
            </button>
            {showLogModal && (
                <Modal id='border-modal' onClose={() => {
                    // console.log('on close')
                    setShowLogModal(false);
                }}>
                    <div id="two-cols">
                        <div id='left-side'>
                            <div id="login-text">
                                <h2 id="login-title">Log in to Gulp</h2>
                                <h5 id="signup-redirect">
                                    <div className='text'>New to Gulp? </div>
                                    <div className='button' onClick={() => {
                                        setShowSignModal(true)
                                        setShowLogModal(false)
                                }}>
                                    Sign up
                                </div>
                                </h5>
                                <p id="terms">By logging in, you agree to Gulp's Terms of Service and Privacy Policy.</p>

                            </div>
                            <form id='login-form' onSubmit={onLogin}>

                                <button
                                    id='demo-button'
                                    type='submit'
                                    onClick={() => {
                                        setEmail('demo@user.io')
                                        setPassword('password')
                                    }}
                                >
                                    Continue with DemoUser
                                </button>

                                <div id='lines'><span className='or'>OR</span></div>

                                {showLogModal && hasSubmitLog && errors.length > 0 && (
                                    <div id='modal-errors-box'>
                                        {errors.map((error, ind) => (
                                            <div id='modal-errors' key={ind}>{error}</div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <input
                                        id='login-input'

                                        name='email'
                                        type='email'
                                        placeholder='Email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <input
                                        id='login-input'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    />
                                </div>
                                <button id='login-button' type='submit'>Log In</button>
                            </form>
                            <div id='login-fineprint'>
                                <p id='fineprint-text'>New to Gulp?</p>
                                <div id='fineprint-link' onClick={() => {
                                    setShowSignModal(true)
                                    setShowLogModal(false)
                                }}>
                                    Sign up
                                </div>
                            </div>
                        </div>
                        <div>
                            <img id='party' src={party} alt="login-party" onError={e => e.target.src=broken} />
                        </div>
                    </div>
                </Modal>
            )}
    {/* -----------------------------SIGN UP MODAL----------------------------- */}
            <button
                className='signup-button session-buttons'
                onClick={() => {
                    setShowSignModal(true)
                    setShowLogModal(false)
            }}>
                <span className='session-butt-word signup-word'>
                    Sign Up
                </span>
            </button>
            {showSignModal && (
                <Modal id='border-modal' onClose={() => {
                    setShowSignModal(false)
                }}>
                    <div id="two-cols">
                        <div id='left-side'>
                            <div id="login-text">
                                <h2 id="login-title">Sign Up for Gulp</h2>
                                <h5 id="signup-redirect">
                                    Connect with great local businesses
                                </h5>
                                <p id="terms">By continuing, you agree to Gulp's Terms of Service and acknowledge gulp's Privacy Policy.</p>
                            </div>
                            <form onSubmit={onLogin}>
                                <button
                                    id='demo-button'
                                    type='submit'
                                    onClick={() => {
                                        setFirstname('Kermit')
                                        setLastname('Frog')
                                        setEmail('kermitfrog@user.io')
                                        setPassword('password')
                                        setZipCode('91521')
                                    }}
                                >
                                    Continue with DemoUser
                                </button>
                                <p id='terms-signup'>Don't worry, we never post without your permission.</p>
                                <div id='lines'><span className='or'>OR</span></div>
                            </form>
                            <form onSubmit={onSignUp}>
                            {hasSubmitSign && showSignModal && errors.length > 0 && (
                                    <ul id='sign-up-errors-div-container'>
                                        {errors.map((error, ind) => (
                                            <li id='sign-up-errors' key={ind}>{error}</li>
                                        ))}
                                    </ul>
                                )}
                                <div id='first-last-name'>
                                    <input
                                        id='login-input'
                                        type='text'
                                        name='firstname'
                                        placeholder='First Name'
                                        onChange={e => setFirstname(e.target.value)}
                                        value={first_name}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    ></input>
                                    <input
                                        id='login-input'
                                        type='text'
                                        name='lastname'
                                        placeholder='Last Name'
                                        onChange={e => setLastname(e.target.value)}
                                        value={last_name}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    ></input>
                                </div>
                                <div id='email'>
                                <input
                                        id='login-input'
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                        onChange={e => setUsername(e.target.value)}
                                        value={username}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    ></input>
                                    <input
                                        id='login-input'
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    ></input>
                                </div>
                                <div id='password'>
                                    <input
                                        id='login-input'
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        required={true}
                                    ></input>
                                </div>
                                <div id='zip'>
                                    <input
                                        id='login-input'
                                        type='text'
                                        name='zipcode'
                                        placeholder='ZIP Code'
                                        onChange={e => setZipCode(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                                        value={zipcode}
                                        required={true}
                                    ></input>
                                </div>
                                <button id='login-button' type='submit'>Sign Up</button>
                            </form>
                            <div id='login-fineprint'>
                                <p id='fineprint-text'>Already on Gulp?</p>
                                <div id='fineprint-link' onClick={() => {
                                    setShowSignModal(false)
                                    setShowLogModal(true)
                                }}>Log in</div>
                            </div>
                        </div>
                        <div>
                            <img id='party' src={party} alt="login-party" onError={e => e.target.src=broken} />
                        </div>
                    </div>
                </Modal>
            )}
        </ >
    );
};

export default SignUpForm;
