import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class PricingStyleFour extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="pricing-area pb-50">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Pricing Plan</h2>
                        <div className="bar"></div>
                        <p>You can choose a plan fits your needs</p>
                    </div>

                    <div className="tab pricing-tab bg-color">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Recruiting
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                Evaluations
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>OUR PRICE</h3>
                                                <p>Some motto <br />here</p>
                                            </div>

                                            <div className="price">
                                                $399.99 <span></span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="/login">
                                                    <a className="btn btn-primary">Get Started</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> Benefit 1</li>
                                                <li><Icon.Check /> Benefit 2</li>
                                                <li><Icon.Check /> Benefit 3</li>

                                            </ul>
                                        </div>
                                    </div>




                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>OUR PRICE</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $75 <span>/each</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Get Started Free</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> Drag & Drop Builder</li>
                                                <li><Icon.Check /> Lead Generation & Sales</li>
                                                <li><Icon.Check /> Boot & Digital Assistants</li>
                                                <li><Icon.Check /> Customer Service</li>
                                                <li><Icon.Check /> Up to 1000 Subscribers</li>
                                                <li><Icon.Check /> Unlimited Broadcasts</li>
                                                <li><Icon.Check /> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        );
    }
}

export default PricingStyleFour;