import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const AboutUs = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        {/*
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">

                                <img src="/images/about-one.png" alt="image" />

                            </div>
                        </div>
                        */}

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>MISSION STATEMENT</h2>
                                    <div className="bar"></div>
                                    <p>Hidden Athletes is a professional organization dedicated to providing parents, coaches, and high school athletes across the country a platform to ensure your future endeavors in your fields of study, and to compete at the highest level.</p>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our History</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Who We Are</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <Team />

            <Partner />

            <FunFactsArea />
            */}
            
            <Footer />
        </>
    )
}

export default AboutUs;