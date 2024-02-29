import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import FeedbackStyleFour from '@/components/Common/FeedbackStyleFour';
import Partner from '@/components/MachineLearning/Partner';

const RecruitingRules = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="RECRUITING RULES" />

            <div className="about-area ptb-80">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/*
                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-img">
                                <img src="/images/about4.png" alt="image" />
                            </div>
                        </div>
                        */}

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-content">
                                <span className="sub-title">NCAA</span>
                                <h2>NCAA Division 1 Recruiting Rules</h2>
                                <div className="bar"></div>
                                <ul>

                                    <li><h5>Freshmen and Sophomore Year</h5></li>

                                    <ul>
                                        <li><strong>Recruiting Materials:</strong> You may receive brochures for camps and questionnaires.</li>
                                        <li><strong>Telephone Calls: </strong> Coach cannot call you. You may call the coach anytime.</li>
                                            <li><strong>Off-Campus Contact: </strong> Not allowed.</li>
                                                <li><strong>Official Visit: </strong> Not allowed.</li>
                                                    <li><strong>Unofficial Visit: </strong> You may make unlimited unofficial visits.</li>
                                    </ul>

                                    <li><h5>Junior Year </h5></li>

                                    <ul>
                                        <li><strong>Recruiting Materials:</strong> You may receive recruiting materials. </li>
                                        <li><strong>Telephone Calls: </strong>Allowed beginning July 1 after your junior year. You may call the coach anytime. Football, basketball and ice hockey have different rules. Check the NCAA website if you are in these sports.
                                            Unlimited text beginning July 1 after your junior year.</li>
                                        <li><strong>Off-Campus Contact: </strong>Allowed beginning July 1 after your junior year. Football, basketball and ice hockey have different rules. Check the NCAA website if you are in these sports.</li>
                                        <li><strong>Official Visit: </strong>Not allowed. Basketball has different rules. Check the NCAA website if you are in these sports.</li>
                                        <li><strong>Unofficial Visit: </strong>You may make unlimited unofficial visits except during a dead period</li>
                                    </ul>

                                        <li><h5>Senior Year </h5></li>
                                        <ul>
                                            <li><strong>Recruiting Materials: </strong> Allowed.</li>
                                            <li><strong>Telephone Calls: </strong>Allowed once per week. Unlimited after you sign a National Letter of Intent. You may call the coach anytime. Football and basketball have different rules. Check the NCAA website if you are in these sports.</li>
                                                <li><strong>Off-Campus Contact: </strong>Allowed. Not more than three times during your senior year (six times for football and basketball). Football has slightly different rules. Check NCAA website if you are in these sports.</li>
                                                    <li><strong>Official Visit: </strong>Allowed beginning the opening day of classes your senior year.</li>
                                                        <li><strong>Unofficial Visit: </strong>You may make unlimited unofficial visits except during a dead period.</li>
                                        </ul>

                                </ul>

                            </div>
                        </div>


                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-content">
                                <span className="sub-title">NCAA</span>
                                <h2>NCAA Division 2 Recruiting Rules</h2>
                                <div className="bar"></div>

                                    <ul>
                                        <li><strong>Recruiting Materials:</strong> You may receive brochures for camps and questionnaires. You may receive recruiting materials June 15 before your junior year.</li>
                                        <li><strong>Telephone Calls: </strong> Unlimited beginning June 15 before your junior year. Unlimited text beginning July 1 after your junior year.</li>
                                        <li><strong>Off-Campus Contact: </strong> Unlimited beginning June 15 before your junior year.</li>
                                        <li><strong>Official Visit: </strong> Allowed beginning June 15 before your junior year.</li>
                                        <li><strong>Unofficial Visit: </strong> You may make unlimited unofficial visits except during a dead period.</li>
                                    </ul>



                                <span className="sub-title">NCAA</span>
                                <h2>NCAA Division 3 Recruiting Rules</h2>
                                <div className="bar"></div>

                                    <ul>
                                        <li><strong>Recruiting Materials:</strong>  Unlimited at any time.</li>
                                        <li><strong>Telephone Calls: </strong> Unlimited at any time.</li>
                                        <li><strong>Off-Campus Contact: </strong> Unlimited after your junior year</li>
                                        <li><strong>Official Visit: </strong> Allowed beginning the opening day of classes your senior year.</li>
                                        <li><strong>Unofficial Visit: </strong> You may make unlimited unofficial visits except during a dead period.</li>
                                    </ul>


                                <span className="sub-title">NAIA</span>
                                <h2>NAIA Recruiting Rules</h2>
                                <div className="bar"></div>

                                <p>
                                    The NAIA recruiting rules are quite simple. There are no rules concerning the recruiting of prospective student athletes who are in high school or below. There are no recruiting calendars, dead periods, or contact restrictions. So if you are in a showcase and a coach comes up to speak with you about your performance or their college, ask if they are an NAIA school. If so, feel free to speak with them all you want. If they are part of the NCAA, say hello and ask them to call you later. NCAA coaches can only have a full conversation with you after your last game of the weekend.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>SOME HEADING MAYBE</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>SOME HEADING MAYBE</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>SOME HEADING MAYBE</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <Team />

            <FeedbackStyleFour />
           
            <FunFactsArea />

            <div className="pb-80">
                <Partner />
            </div>
            */}
            <Footer />
        </>
    )
}

export default RecruitingRules;