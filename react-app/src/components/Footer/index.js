import { NavLink, useLocation } from 'react-router-dom'
import './Footer.css'
import logoWithText from '../../icons/orange-logo-gray.png'
import logo from '../../icons/orange.png'
import broken from '../../icons/broken.png';
import briefcase from '../../icons/portfolio.svg';

export default function Footer() {
    const url = useLocation().pathname


    return (
        <footer id='footer-outer-wrapper' className={url?.includes("current") ? 'footer-margin' : 'footer'}>
            <div id='footer-inner-wrapper'>
                <div id='footer-lists-wrapper'>
                    <div id='footer-column-about' className='footer-column'>
                        <div className='footer-column-title-wrapper'>
                            <span id='footer-about-title' className='footer-column-title'>About</span>
                        </div>

                        <ul id='footer-column-ul-about' className='footer-column-ul'>
                            <li className='footer-column-li'>
                                <a className='footer-link' href='https://github.com/BrennonMorris/Yelp-Clone' target='_blank' rel='noreferrer'>About Gulp</a>
                            </li>
                        </ul>
                    </div>

                    <div id='footer-column-developers' className='footer-column'>
                        <div className='footer-column-title-wrapper'>
                            <span id='footer-developers-title' className='footer-column-title'>Developer</span>
                        </div>

                        <ul id='footer-column-ul-developers' className='footer-column-ul'>
                            <li className='footer-column-li'>
                                <a className='linked-in' href='https://www.linkedin.com/in/brennonmorris/' target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-linkedin fa-sm" />
                                </a>
                                <a className='github' href='https://github.com/BrennonMorris' target='_blank' rel='noreferrer'>
                                    <i className="fa-brands fa-github fa-sm" />
                                </a>
                                <a className='portfolio' href='https://github.com/BrennonMorris' target='_blank' rel='noreferrer'>
                                    <span className='footer-dev-name'>Brennon Morris</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div id='footer-column-business' className='footer-column'>
                        <div className='footer-column-title-wrapper'>
                            <span id='footer-business-title' className='footer-column-title'>Gulp for Business</span>
                        </div>

                        <ul id='footer-column-ul-business' className='footer-column-ul'>
                            <li className='footer-column-li'><NavLink to="/biz/new" className='footer-link'>Claim Your Business Page</NavLink></li>
                        </ul>
                    </div>

                    <div id='footer-column-languages-countries' className='footer-column'>
                        <div id='footer-languages-title-wrapper' className='footer-column-title-wrapper'>
                            <span id='footer-languages-title' className='footer-column-title'>Language</span>
                        </div>

                        <span className='footer-languages-countries-span'>English</span>


                        <div id='footer-countries-title-wrapper' className='footer-column-title-wrapper'>
                            <span id='footer-countries-title' className='footer-column-title'>Country</span>
                        </div>

                        <span className='footer-languages-countries-span'>United States</span>
                    </div>
                </div>


                <div id='footer-copyright-wrapper'>
                    <span id='footer-copyright'>
                        Copyright ©2022 Gulp Inc. Gulp, <img id='gulp-logo-with-text-copyright' src={logoWithText} alt='' onError={e => e.target.src=broken} />, <img id='gulp-logo-copyright' src={logo} alt='' onError={e => e.target.src=broken} /> and related marks are registered trademarks of Gulp.
                    </span>
                </div>
            </div>
        </footer>
    )
}
