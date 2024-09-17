import React, { useEffect, useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
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
            highLight: user.highLight,
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
                                            <p><Icon.User /> Name: {editingContact ? <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /> : user.name}</p>
                                            <p><Icon.User /> Last Name: {editingContact ? <input type="text" value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} /> : user.lastname}</p>
                                            <p><Icon.Mail /> Email: {editingContact ? <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /> : user.email}</p>
                                            <p><Icon.Phone /> Phone: {editingContact ? <input type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} /> : user.phone}</p>
                                            <p><Icon.MapPin /> Address: {editingContact ? <input type="text" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} /> : user.address}</p>
                                            <p><Icon.Twitter /> Twitter: {editingContact ? <input type="text" value={user.twitter_handle} onChange={(e) => setUser({ ...user, twitter_handle: e.target.value })} /> : user.twitter_handle}</p>
                                            <p><Icon.Facebook /> Facebook: {editingContact ? <input type="text" value={user.facebook} onChange={(e) => setUser({ ...user, facebook: e.target.value })} /> : user.facebook}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Icon.Instagram /> Instagram: {editingContact ? <input type="text" value={user.instagram} onChange={(e) => setUser({ ...user, instagram: e.target.value })} /> : user.instagram}</p>
                                            <p><Icon.Square /> Snapchat: {editingContact ? <input type="text" value={user.snapchat} onChange={(e) => setUser({ ...user, snapchat: e.target.value })} /> : user.snapchat}</p>
                                            <p><Icon.Info /> About Me: {editingContact ? <input type="text" value={user.aboutMe} onChange={(e) => setUser({ ...user, aboutMe: e.target.value })} /> : user.aboutMe}</p>
                                            <p><Icon.BarChart2 /> Statistics: {editingContact ? <input type="text" value={user.statistics} onChange={(e) => setUser({ ...user, statistics: e.target.value })} /> : user.statistics}</p>
                                            <p><Icon.User /> Senior Year: {editingContact ? <input type="text" value={user.seniorYear} onChange={(e) => setUser({ ...user, seniorYear: e.target.value })} /> : user.seniorYear}</p>
                                            <p><Icon.User /> Junior Year: {editingContact ? <input type="text" value={user.juniorYear} onChange={(e) => setUser({ ...user, juniorYear: e.target.value })} /> : user.juniorYear}</p>
                                            <p><Icon.Link /> HighLight: {editingContact ? <input type="text" value={user.highLight} onChange={(e) => setUser({ ...user, highLight: e.target.value })} /> : user.highLight}</p>
                                        </div>
                                    </div>

                                    <h3> ATHLETIC INFO &nbsp;
                                        {!editingContact && (
                                            <a href="#" onClick={() => setEditingContact(true)}>
                                                <Icon.Edit />
                                            </a>
                                        )}
                                    </h3>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p><Icon.Activity /> Height: {editingContact ? <input type="text" value={user.height} onChange={(e) => setUser({ ...user, height: e.target.value })} /> : user.height}</p>
                                            <p><Icon.Activity /> Weight: {editingContact ? <input type="text" value={user.weight} onChange={(e) => setUser({ ...user, weight: e.target.value })} /> : user.weight}</p>
                                            <p><Icon.User /> 40 Yard Dash: {editingContact ? <input type="text" value={user.forty} onChange={(e) => setUser({ ...user, forty: e.target.value })} /> : user.forty}</p>
                                            <p><Icon.User /> 40 Yard Dash (Laser): {editingContact ? <input type="text" value={user.fortyLazer} onChange={(e) => setUser({ ...user, fortyLazer: e.target.value })} /> : user.fortyLazer}</p>
                                            <p><Icon.User /> Pro Shuttle: {editingContact ? <input type="text" value={user.proShuttle} onChange={(e) => setUser({ ...user, proShuttle: e.target.value })} /> : user.proShuttle}</p>
                                            <p><Icon.User /> Vertical Jump: {editingContact ? <input type="text" value={user.vertical} onChange={(e) => setUser({ ...user, vertical: e.target.value })} /> : user.vertical}</p>
                                            <p><Icon.User /> Broad Jump: {editingContact ? <input type="text" value={user.broadJump} onChange={(e) => setUser({ ...user, broadJump: e.target.value })} /> : user.broadJump}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Icon.User /> Bench Press: {editingContact ? <input type="text" value={user.bench} onChange={(e) => setUser({ ...user, bench: e.target.value })} /> : user.bench}</p>
                                            <p><Icon.User /> Squat: {editingContact ? <input type="text" value={user.squat} onChange={(e) => setUser({ ...user, squat: e.target.value })} /> : user.squat}</p>
                                            <p><Icon.User /> Power Clean: {editingContact ? <input type="text" value={user.pClean} onChange={(e) => setUser({ ...user, pClean: e.target.value })} /> : user.pClean}</p>
                                            <p><Icon.User /> Strength: {editingContact ? <input type="text" value={user.strength} onChange={(e) => setUser({ ...user, strength: e.target.value })} /> : user.strength}</p>
                                            <p><Icon.User /> Speed: {editingContact ? <input type="text" value={user.speed} onChange={(e) => setUser({ ...user, speed: e.target.value })} /> : user.speed}</p>
                                            <p><Icon.Star /> Star Rating: {editingContact ? <input type="text" value={user.starRating} onChange={(e) => setUser({ ...user, starRating: e.target.value })} /> : user.starRating}</p>
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
                                            <p><Icon.User /> GPA: {editingContact ? <input type="text" value={user.gpa} onChange={(e) => setUser({ ...user, gpa: e.target.value })} /> : user.gpa}</p>
                                            <p><Icon.User /> SAT: {editingContact ? <input type="text" value={user.sat} onChange={(e) => setUser({ ...user, sat: e.target.value })} /> : user.sat}</p>
                                            <p><Icon.User /> ACT: {editingContact ? <input type="text" value={user.act} onChange={(e) => setUser({ ...user, act: e.target.value })} /> : user.act}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Icon.FileText /> Transcript: {editingContact ? <input type="text" value={user.transcript} onChange={(e) => setUser({ ...user, transcript: e.target.value })} /> : user.transcript}</p>
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
