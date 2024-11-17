import React, { useEffect, useState } from "react";
import Link from "@/utils/ActiveLink"; // Ensure alias '@' is properly configured
import { ChevronDown } from "react-feather"; // Import only required icons to reduce bundle size

import configData from "../../jsconfig.json"; // Verify this import works in your build setup

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const [userName, setUserName] = useState(null);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");
            if (header) {
                if (window.scrollY > 170) {
                    header.classList.add("is-sticky");
                } else {
                    header.classList.remove("is-sticky");
                }
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const classOne = menu
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = menu
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserName = localStorage.getItem("userName");
            setUserName(storedUserName || null);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("id");
        window.location.href = "/";
    };

    return (
        <header id="header" className="headroom navbar-style-three">
            <div className="startp-nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                                <img src="/images/combine.png" alt="combine" />
                            </a>
                        </Link>

                        <ul>
                            {userName && <li>{userName}</li>}
                        </ul>

                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            aria-controls="navbarSupportedContent"
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
                                        <a
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Recruiting <ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/#"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    className="nav-link"
                                                >
                                                    Pick a Sport{" "}
                                                    <ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link
                                                        href="/football"
                                                        activeClassName="active"
                                                    >
                                                        <a
                                                            onClick={
                                                                toggleNavbar
                                                            }
                                                            className="nav-link"
                                                        >
                                                            Football
                                                        </a>
                                                    </Link>
                                                </li>
                                                {/* Uncomment below as needed */}
                                                {/* <li className="nav-item">
                                                    <Link href="/basketball" activeClassName="active"><a onClick={toggleNavbar} className="nav-link">Men's Basketball</a>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                href="/recruiting-rules"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    NCAA / NAIA Rules
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Evaluations <ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/about-us"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    Football
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            About Us <ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link
                                                href="/about-us"
                                                activeClassName="active"
                                            >
                                                <a
                                                    onClick={toggleNavbar}
                                                    className="nav-link"
                                                >
                                                    Mission Statement
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">
                            {userName ? (
                                <>
                                    <Link href="/user-profile">
                                        <a className="btn btn-light">My Page</a>
                                    </Link>
                                    <Link href="/">
                                        <a
                                            className="btn btn-primary"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </a>
                                    </Link>
                                </>
                            ) : (
                                <Link href="/login">
                                    <a className="btn btn-primary">Login</a>
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
