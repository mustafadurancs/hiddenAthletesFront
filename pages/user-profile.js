import React, {useEffect, useState} from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';
import axios from "axios";

const backgroundImage = {
    backgroundImage: 'url("/images/logo_bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    //backgroundSize: 'cover'
};

const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null

if(userID === null){

    console.log("Not logged in!!!")
}
const UserProfile = () => {

    const [user, setUser] = useState(null);
    const username = userID;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/user/api/id?username=${username}&password`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!user) {
        return <div className="align-content-xxl-center"><h3>Loading...</h3></div>;
    }


    return (
        <>
            <Navbar />

            <PageBanner pageTitle="YOUR HIDDEN ATHLETE PROFILE" />



                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12" style={{background: "orange"}}>

                            {/*
                            <div className="single-team" style={{background: "orange"}}>
                                <div className="col-md-3">
                                    <Icon.Edit/> <Link href="/" activeClassName="active"><a className="nav-link">Edit My Profile</a>
                                </Link>
                                </div>
                                <div className="team-image">
                                    <img src="/images/profile_giant.png" alt="image"/>
                                    <h1>{user.name}  {user.lastname}</h1>
                                </div>
                                <h3>FOOTBALL</h3>
                            </div>
                            */}
                        </div>
                        <div className="row" style={backgroundImage}>
                            <div className="col-lg-6 col-md-6">
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>My Contact  <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                                        </Link></h3>

                                        <hr/>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="" target="_blank">
                                                <Icon.Inbox /> {user.username}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <Icon.Phone /> {user.phone}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <Icon.Facebook /> Facebook : {user.facebook}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <Icon.Instagram /> Instagram : {user.instagram}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.snapchat.com/" target="_blank">
                                                <Icon.Square /> Snapchat : {user.snapchat}
                                            </a>
                                        </li>
                                        <li>

                                                <Icon.Link /> HighLight : {user.highLight}

                                        </li>
                                        <li>
                                            <a href="https://www.snapchat.com/" target="_blank">
                                                <Icon.User/> Photo : {user.username}
                                            </a>
                                        </li>

                                    </ul>
                                </div>


                                <h3>Tangibles <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                                </Link></h3>
                                <hr/>

                                    <p align="left"><strong>HEIGHT : </strong>{user.height} </p>
                                    <p align="left"><strong>WEIGHT : </strong>{user.weight} </p>
                                    <p align="left"><strong>40 : </strong>{user.forty} </p>
                                    <p align="left"><strong>40 Laser : </strong>{user.fortyLazer} </p>
                                    <p align="left"><strong>PRO SHUTTLE : </strong>{user.proShuttle} </p>
                                    <p align="left"><strong>VERTICAL : </strong>{user.verticle} </p>
                                    <p align="left"><strong>BROAD JUMP : </strong>{user.broadJump} </p>
                                    <p align="left"><strong>BENCH : </strong>{user.bench} </p>
                                    <p align="left"><strong>SQUAT : </strong>{user.squat} </p>
                                    <p align="left"><strong>P.CLEAN : </strong>{user.pClean} </p>


                            <h3>ACADEMICS <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                            </Link></h3>
                                <hr/>

                                <p align="left"><strong>GPA : </strong>{user.gpa} </p>
                                <p align="left"><strong>ACT : </strong>{user.act} </p>
                                <p align="left"><strong>SAT : </strong>{user.sat} </p>


                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>About Me <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                                        </Link></h3>
                                        <hr/>
                                    </div>
                                    <p> {user.aboutMe}</p>

                                </div>


                                <h3>STATISTICS <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                                </Link></h3>
                                <hr/>

                                <h5>SENIOR YEAR</h5>
                                <h6>{user.seniorYear}</h6>
                                <ul>
                                    <li>Analyze current and past financial data</li>
                                    <li>Look at recent financial performance and identify trends</li>
                                    <li>Prepare reports on the above information and communicate the insights of these reports to the broader business</li>
                                    <li>Consult with the management team to develop long-term</li>
                                    commercial plans
                                    <li>Suggest budgets and improvements based on the above
                                        information</li>
                                </ul>
                                <h5>JUNIOR YEAR</h5>
                                <h6>{user.juniorYear}</h6>
                                <ul>
                                    <li>Analyze current and past financial data</li>
                                    <li>Look at recent financial performance and identify trends</li>
                                    <li>Prepare reports on the above information and communicate the insights of these reports to the broader business</li>
                                    <li>Consult with the management team to develop long-term</li>
                                    commercial plans
                                    <li>Suggest budgets and improvements based on the above
                                        information</li>
                                </ul>


                                <h3>Accolades <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                                </Link></h3>
                                <h5>{user.accolades}</h5>
                                <p align="left">AWARDS</p>


                                <h3>Evaluations & Recruiting <Link href="/" activeClassName="active"><a><Icon.Edit/></a>
                                </Link></h3>
                                <h5>{user.accolades}</h5>
                                <p align="left">AWARDS</p>

                            </div>



                        </div>
                    </div>
                </div>


            <Footer />
        </>
    )
}

export default UserProfile;