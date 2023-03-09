import React, {useEffect, useState} from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';
import axios from "axios";


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

            <PageBanner pageTitle="PROFILE PAGE" />


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src="/images/team-image/profile.png" alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>{user.name} {user.lastname}</h3>
                                        <span>{user.username} </span>
                                    </div>

                                    <ul>
                                        <li> Facebook
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li> Instagram
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <Icon.Instagram />
                                            </a>
                                        </li>
                                        <li> Snapchat
                                            <a href="https://www.snapchat.com/" target="_blank">
                                                <Icon.Square />
                                            </a>
                                        </li>

                                    </ul>

                                    <p align="left"><strong>Address : </strong>{user.address} </p>
                                    <p align="left"><strong>Email : </strong>{user.email} </p>
                                    <p align="left"><strong>Sport : </strong>{user.sport} </p>
                                    <p align="left"><strong>Position : </strong>{user.position} </p>
                                    <p align="left"><strong>Star Rating : </strong>{user.starRating} </p>
                                    <p align="left"><strong>Tangables : </strong>{user.tangables} </p>
                                    <Link href="/football"><a className="btn btn-primary">Football</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            <Footer />
        </>
    )
}

export default UserProfile;