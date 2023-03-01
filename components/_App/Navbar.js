import React from "react"
import Link from '@/utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Recruiting <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/it-startup" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link"> Get Recruited </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Eligibility Centers <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="https://web3.ncaa.org/ecwr3/" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">NCAA</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="https://play.mynaia.org/" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">NAIA</a>
                                                    </Link>
                                                </li>


                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/iot" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">NCAA Rules</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/hosting" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">NAIA Rules</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://ncaaorg.s3.amazonaws.com/compliance/recruiting/NCAA_RecruitingFactSheet.pdf" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">NCAA Recruiting Facts</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="https://www.ncaa.org/sports/2018/5/8/division-i-and-ii-recruiting-calendars.aspx" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">NCAA Recruiting Calendars</a>
                                            </Link>
                                        </li> 


                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Evaluations <Icon.ChevronDown />
                                        </a>
                                    </Link> 

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/football" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Football</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Basketball</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Other</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Training  <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/about-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Camps</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Lessons</a>
                                            </Link>
                                        </li>


                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Agency</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            About Us <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/blog-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Mission Statement</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Staff</a>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>


                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Shop
                                        </a>
                                    </Link>


                                </li>
                            </ul>
                        </div>

                        <div className="others-option">
                            {/*
                            <Link href="/cart">
                                <a className="cart-wrapper-btn">
                                    <Icon.ShoppingCart /> 
                                    <span>{cart.length}</span>
                                </a>
                            </Link>
                            */}
                            <Link href="/sign-up">
							    <a className="btn btn-light">Sign Up</a>
                            </Link>

                            <Link href="/login">
							    <a className="btn btn-primary">Login</a>
                            </Link>
						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;