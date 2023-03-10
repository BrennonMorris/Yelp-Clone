import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal';
import party from '../../icons/login.png'
import './LoginForm.css'
import broken from '../../icons/broken.png'

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <button className='login-button session-buttons' onClick={() => { setShowModal(true) }}>
                <span className='session-butt-word login-word'>
                    Log In
                </span>
            </button>
            {showModal && (
                <Modal id='border-modal' onClose={() => {
                    // console.log('on close')
                    setShowModal(false)
                }}>
                    <div id="two-cols">
                        <div id='left-side'>
                            <div id="login-text">
                                <h2 id="login-title">Log in to Gulp</h2>
                                <h5 id="signup-redirect">
                                    <>New to Gulp? </>
                                    <NavLink to="/signup">Sign up</NavLink>
                                </h5>
                                <p id="terms">By logging in, you agree to Gulp's Terms of Service and Privacy Policy.</p>

                            </div>
                            <form id='login-form' onSubmit={onLogin}>
                                <div>
                                    {errors.map((error, ind) => (
                                        <div key={ind}>{error}</div>
                                    ))}
                                </div>
                                <button
                                  id='demo-button'
                                  type='submit'
                                  onClick={()=> {
                                    setEmail('demo@user.io')
                                    setPassword('password')
                                  }}
                                >
                                    Continue with DemoUser
                                </button>

                                <div id='lines'><span className='or'>OR</span></div>
                                <div>
                                    <input
                                        id='login-input'

                                        name='email'
                                        type='text'
                                        placeholder='Email'
                                        value={email}
                                        onChange={updateEmail}
                                    />
                                </div>
                                <div>
                                    <input
                                        id='login-input'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={updatePassword}
                                    />
                                </div>
                                <button id='login-button' type='submit'>Log In</button>
                            </form>
                            <div id='login-fineprint'>
                                <p id='fineprint-text'>New to Gulp?</p>
                                <NavLink id='fineprint-link' to='/login'>Sign up</NavLink>
                            </div>
                        </div>
                        <div>
                            <img id='party' src={party} alt="login-party" onError={e => e.target.src=broken} />
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );

    // return (
    //     <form onSubmit={onLogin}>
    //         <div>
    //             {errors.map((error, ind) => (
    //                 <div key={ind}>{error}</div>
    //             ))}
    //         </div>
    //         <div>
    //             <label htmlFor='email'>Email</label>
    //             <input
    //                 name='email'
    //                 type='text'
    //                 placeholder='Email'
    //                 value={email}
    //                 onChange={updateEmail}
    //             />
    //         </div>
    //         <div>
    //             <label htmlFor='password'>Password</label>
    //             <input
    //                 name='password'
    //                 type='password'
    //                 placeholder='Password'
    //                 value={password}
    //                 onChange={updatePassword}
    //             />
    //             <button type='submit'>Login</button>
    //         </div>
    //     </form>
    // );
};

export default LoginForm;
