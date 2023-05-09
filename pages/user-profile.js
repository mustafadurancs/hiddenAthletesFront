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
                            <div className="single-team" style={{background: "orange"}}>
                                <div className="team-image">
                                    <img src="/images/profile_giant.png" alt="image"/>
                                    <h1>{user.name}  {user.lastname}</h1>
                                </div>
                                <h3>FOOTBALL</h3>
                            </div>
                        </div>
                        <div className="row" style={backgroundImage}>
                            <div className="col-lg-6 col-md-6">
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>My Contact</h3><hr/>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="" target="_blank">
                                                <Icon.Inbox /> {user.username}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <Icon.Phone /> {user.address}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <Icon.Facebook /> Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <Icon.Instagram /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.snapchat.com/" target="_blank">
                                                <Icon.Square /> Snapchat
                                            </a>
                                        </li>

                                    </ul>
                                </div>


                                <h3>Tangibles</h3><hr/>

                                    <p align="left"><strong>HEIGHT : </strong>{user.address} </p>
                                    <p align="left"><strong>WEIGHT : </strong>{user.email} </p>
                                    <p align="left"><strong>40 : </strong>{user.sport} </p>
                                    <p align="left"><strong>40 Laser : </strong>{user.position} </p>
                                    <p align="left"><strong>PRO SHUTTLE : </strong>{user.starRating} </p>
                                    <p align="left"><strong>VERTICAL : </strong>{user.tangables} </p>
                                    <p align="left"><strong>BROAD JUMP : </strong>{user.position} </p>
                                    <p align="left"><strong>BENCH : </strong>{user.starRating} </p>
                                    <p align="left"><strong>SQUAT : </strong>{user.tangables} </p>
                                    <p align="left"><strong>P.CLEAN : </strong>{user.tangables} </p>


                            <h3>ACADEMICS</h3><hr/>

                                <p align="left"><strong>GPA : </strong>{user.address} </p>
                                <p align="left"><strong>ACT : </strong>{user.email} </p>
                                <p align="left"><strong>SAT : </strong>{user.sport} </p>
                                <p align="left"><strong>TRANSCRIPTS : </strong>{user.tangables} </p>


                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>About Me</h3><hr/>
                                    </div>
                                    <p> Some text from db</p>

                                </div>


                                <h3>STATISTICS</h3> <hr/>

                                <h5>SENIOR YEAR</h5>
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
                                <ul>
                                    <li>Analyze current and past financial data</li>
                                    <li>Look at recent financial performance and identify trends</li>
                                    <li>Prepare reports on the above information and communicate the insights of these reports to the broader business</li>
                                    <li>Consult with the management team to develop long-term</li>
                                    commercial plans
                                    <li>Suggest budgets and improvements based on the above
                                        information</li>
                                </ul>


                                <h3>Accolades</h3>

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