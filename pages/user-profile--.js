import React, { useEffect, useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';
import axios from 'axios';

import configData from '../jsconfig.json';

const backgroundImage = {
    backgroundImage: 'url("/images/logo_bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
};

const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null;
const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userName') : null;

if (userID === null) {
    console.log('Not logged in!!!');
}

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [editingContact, setEditingContact] = useState(false);

    const username = userEmail;

    useEffect(() => {
        axios
            .get(`${configData.SERVER_URL}/user/api/id?username=${username}&password`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSaveContact = () => {
        const data = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            sport: user.sport,
            position: user.position,
            tangibles: user.tangibles,
            email: user.email,
            phone: user.phone,
            address: user.address,
            twitter_handle: user.twitter_handle,
            instagram: user.instagram,
            facebook: user.facebook,
            snapchat: user.snapchat,
            aboutMe: user.aboutMe,
            statistics: user.statistics,
            seniorYear: user.seniorYear,
            juniorYear: user.juniorYear,
            accolades: user.accolades,
            height: user.height,
            weight: user.weight,
            forty: user.forty,
            fortyLazer: user.fortyLazer,
            proShuttle: user.proShuttle,
            vertical: user.vertical,
            broadJump: user.broadJump,
            bench: user.bench,
            squat: user.squat,
            pClean: user.pClean,
            strength: user.strength,
            speed: user.speed,
            starRating: user.starRating,
            gpa: user.gpa,
            act: user.act,
            sat: user.sat,
            transcript: user.transcript,
            highLight: user.highLight
        };

        axios
            .post(`${configData.SERVER_URL}/user/api/update`, data)
            .then((response) => {
                console.log('Contact information updated successfully');
                setEditingContact(false); 
            })
            .catch((error) => {
                console.error('Error updating contact information:', error);
            });
    };

    if (!user) {
        return <div className="align-content-xxl-center"><h3>Loading...</h3></div>;
    }

    return (
        <>
            <Navbar />
            <PageBanner pageTitle="YOUR HIDDEN ATHLETE PROFILE" />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12" style={{ background: 'orange' }}>
                    </div>
                    <div className="row" style={backgroundImage}>
                        <div className="col-lg-12 col-md-12">
                            <div className="team-content">
                                <div className="team-info">
                                    <h3> MY CONTACT &nbsp;
                                        {!editingContact && (
                                            <a href="#" onClick={() => setEditingContact(true)}>
                                                <Icon.Edit />
                                            </a>
                                        )}
                                    </h3>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>
                                                <span><Icon.Mail /> Email: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                                ) : user.email}
                                            </p>
                                            <p>
                                                <span><Icon.Phone /> Phone: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                                                ) : user.phone}
                                            </p>
                                            <p>
                                                <span><Icon.Facebook /> Facebook: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.facebook} onChange={(e) => setUser({ ...user, facebook: e.target.value })} />
                                                ) : user.facebook}
                                            </p>
                                            <p>
                                                <span><Icon.Square /> Snapchat: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.snapchat} onChange={(e) => setUser({ ...user, snapchat: e.target.value })} />
                                                ) : user.snapchat}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                <span><Icon.Instagram /> Instagram: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.instagram} onChange={(e) => setUser({ ...user, instagram: e.target.value })} />
                                                ) : user.instagram}
                                            </p>
                                            <p>
                                                <span><Icon.Link /> HighLight: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.highLight} onChange={(e) => setUser({ ...user, highLight: e.target.value })} />
                                                ) : user.highLight}
                                            </p>
                                            <p>
                                                <span><Icon.User /> Photo: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                                ) : user.username}
                                            </p>
                                        </div>
                                    </div>

                                    <h3> ACADEMIC INFO &nbsp;
                                        {!editingContact && (
                                            <a href="#" onClick={() => setEditingContact(true)}>
                                                <Icon.Edit />
                                            </a>
                                        )}
                                    </h3>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>
                                                <span><Icon.User /> GPA: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.gpa} onChange={(e) => setUser({ ...user, gpa: e.target.value })} />
                                                ) : user.gpa}
                                            </p>
                                            <p>
                                                <span><Icon.User /> SAT: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.sat} onChange={(e) => setUser({ ...user, sat: e.target.value })} />
                                                ) : user.sat}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                <span><Icon.User /> ACT: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.act} onChange={(e) => setUser({ ...user, act: e.target.value })} />
                                                ) : user.act}
                                            </p>
                                            <p>
                                                <span><Icon.User /> Transcript: &nbsp;</span>
                                                {editingContact ? (
                                                    <input type="text" value={user.transcript} onChange={(e) => setUser({ ...user, transcript: e.target.value })} />
                                                ) : user.transcript}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            {editingContact && (
                                                <>
                                                    <button className="btn btn-primary" onClick={handleSaveContact}>
                                                        <Icon.Check /> Save
                                                    </button>
                                                    <button className="btn btn-danger" onClick={() => setEditingContact(false)}>
                                                        <Icon.X /> Cancel
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default UserProfile;
