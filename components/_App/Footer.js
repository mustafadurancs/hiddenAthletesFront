import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p>Discover Your Potential</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about-us">
                                        <a>About Us</a>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/pricing">
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>

                                    <Link href="/careers">
                                        <a>Career</a>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">

                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li>
                                <li>
                                    {/*
                                    <Link href="/team">
                                        <a>Team</a>
                                    </Link>
                                    */}
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Follow Us</h3>
                            
                            <ul className="footer-contact-info">
                                {/*
                                <li>
                                    <Icon.MapPin />
                                    3815 Lake Edinburg Ln, Richmond, <br /> TX 77406, USA
                                </li>

                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:support@hiddenathletes.com">support@hiddenathletes.com</a>
                                </li>

                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                                </li>
                                */}
                            </ul>
                            <ul className="social-links">
                                <li> 
                                    <a href="https://www.facebook.com/profile.php?id=100069589126238" className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://twitter.com/HiddenAthletes" className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/hiddenathletesllc/" className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/hidden-athletes" className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/" className="youtube" target="_blank">
                                        <Icon.Youtube/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} Hidden Athletes. All rights reserved by <a href="/" target="_blank">Hidden Athletes</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 