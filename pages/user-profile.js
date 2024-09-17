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

if (userID === null) {
    console.log('Not logged in!!!');
}

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [editingContact, setEditingContact] = useState(false);

    const username = userID;

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
            tangables: user.tangables,
            email: user.email,
            phone: user.phone,
            address: user.address,
            titter_handle: user.titter_handle,
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
            verticle: user.verticle,
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
                // You can perform additional actions or update the UI as needed
                setEditingContact(false); // Switch back to non-edit mode after saving
            })
            .catch((error) => {
                console.error('Error updating contact information:', error);
                // Handle error or display error message
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
                        {/* ... */}
                    </div>
                    <div className="row" style={backgroundImage}>
                        <div className="col-lg-6 col-md-6">
                            <div className="team-content">
                                <div className="team-info">
                                            <p>

                        <span>
                          <Icon.Mail /> Email : &nbsp;
                        </span>
                                                {editingContact ? (
                                                    <input
                                                        type="text"
                                                        value={user.email}
                                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                    />
                                                ) : (
                                                    user.email
                                                )}
                                            </p>
                                            <p>
                        <span>
                          <Icon.Phone /> Phone : &nbsp;
                        </span>
                                                {editingContact ? (
                                                    <input
                                                        type="text"
                                                        value={user.phone}
                                                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                                    />
                                                ) : (
                                                    user.phone
                                                )}
                                            </p>
                                            <p>
                        <span>
                          <Icon.Facebook /> Facebook : &nbsp;
                        </span>
                                                {editingContact ? (
                                                    <input
                                                        type="text"
                                                        value={user.facebook}
                                                        onChange={(e) => setUser({ ...user, facebook: e.target.value })}
                                                    />
                                                ) : (
                                                    user.facebook
                                                )}

                                            </p>
                                            <p>
                        <span>
                          <Icon.Instagram /> Instagram : &nbsp;
                        </span>
                                                {editingContact ? (
                                                    <input
                                                        type="text"
                                                        value={user.instagram}
                                                        onChange={(e) => setUser({ ...user, instagram: e.target.value })}
                                                    />
                                                ) : (
                                                    user.instagram
                                                )}

                                            </p>
                                            <p>
                        <span>
                          <Icon.Square />  Snapchat : &nbsp;
                        </span>
                                                {editingContact ? (
                                                    <input
                                                        type="text"
                                                        value={user.snapchat}
                                                        onChange={(e) => setUser({ ...user, facebook: e.target.value })}
                                                    />
                                                ) : (
                                                    user.snapchat
                                                )}

                                            </p>
                                            <p>
                        <span>
                          <Icon.Link /> HighLight : &nbsp;
                        </span>
                                                {editingContact ? (
                                                    <input
                                                        type="text"
                                                        value={user.highLight}
                                                        onChange={(e) => setUser({ ...user, highLight: e.target.value })}
                                                    />
                                                ) : (
                                                    user.highLight
                                                )}

                                            </p>
                                    <p>
                        <span>
                          <Icon.User /> Photo : &nbsp;
                        </span>
                                        {editingContact ? (
                                            <input
                                                type="text"
                                                value={user.username}
                                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                            />
                                        ) : (
                                            user.username
                                        )}

                                    </p>
                                    <p>

                                        <h3> ACADEMIC INFO &nbsp;
                                            {!editingContact && (
                                                <a href="#" onClick={() => setEditingContact(true)}>
                                                    <Icon.Edit />
                                                </a>
                                            )}
                                        </h3>
                        <span>
                          <Icon.User /> SAT : &nbsp;
                        </span>
                                        {editingContact ? (
                                            <input
                                                type="text"
                                                value={user.sat}
                                                onChange={(e) => setUser({ ...user, sat: e.target.value })}
                                            />
                                        ) : (
                                            user.sat
                                        )}

                                    </p>
                                    <p>
                        <span>
                          <Icon.User /> GPA : &nbsp;
                        </span>
                                        {editingContact ? (
                                            <input
                                                type="text"
                                                value={user.gpa}
                                                onChange={(e) => setUser({ ...user, gpa: e.target.value })}
                                            />
                                        ) : (
                                            user.gpa
                                        )}

                                    </p>
                                    <p>
                        <span>
                          <Icon.User /> ACT : &nbsp;
                        </span>
                                        {editingContact ? (
                                            <input
                                                type="text"
                                                value={user.act}
                                                onChange={(e) => setUser({ ...user, act: e.target.value })}
                                            />
                                        ) : (
                                            user.act
                                        )}

                                    </p>
                                            {/* Render other contact information fields in a similar way */}
<p>
  <span>
    <Icon.User /> Name : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.name}
      onChange={(e) => setUser({ ...user, name: e.target.value })}
    />
  ) : (
    user.name
  )}
</p>
<p>
  <span>
    <Icon.User /> Lastname : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.lastname}
      onChange={(e) => setUser({ ...user, lastname: e.target.value })}
    />
  ) : (
    user.lastname
  )}
</p>
<p>
  <span>
    <Icon.Star /> Sport : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.sport}
      onChange={(e) => setUser({ ...user, sport: e.target.value })}
    />
  ) : (
    user.sport
  )}
</p>
<p>
  <span>
    <Icon.Tag /> Position : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.position}
      onChange={(e) => setUser({ ...user, position: e.target.value })}
    />
  ) : (
    user.position
  )}
</p>
<p>
  <span>
    <Icon.Paperclip /> Tangables : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.tangables}
      onChange={(e) => setUser({ ...user, tangables: e.target.value })}
    />
  ) : (
    user.tangables
  )}
</p>
<p>
  <span>
    <Icon.Book /> About Me : &nbsp;
  </span>
  {editingContact ? (
    <textarea
      value={user.aboutMe}
      onChange={(e) => setUser({ ...user, aboutMe: e.target.value })}
    />
  ) : (
    user.aboutMe
  )}
</p>
<p>
  <span>
    <Icon.BarChart /> Statistics : &nbsp;
  </span>
  {editingContact ? (
    <textarea
      value={user.statistics}
      onChange={(e) => setUser({ ...user, statistics: e.target.value })}
    />
  ) : (
    user.statistics
  )}
</p>
<p>
  <span>
    <Icon.Calendar /> Senior Year : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.seniorYear}
      onChange={(e) => setUser({ ...user, seniorYear: e.target.value })}
    />
  ) : (
    user.seniorYear
  )}
</p>
<p>
  <span>
    <Icon.Calendar /> Junior Year : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.juniorYear}
      onChange={(e) => setUser({ ...user, juniorYear: e.target.value })}
    />
  ) : (
    user.juniorYear
  )}
</p>
<p>
  <span>
    <Icon.Award /> Accolades : &nbsp;
  </span>
  {editingContact ? (
    <textarea
      value={user.accolades}
      onChange={(e) => setUser({ ...user, accolades: e.target.value })}
    />
  ) : (
    user.accolades
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Height : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.height}
      onChange={(e) => setUser({ ...user, height: e.target.value })}
    />
  ) : (
    user.height
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Weight : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.weight}
      onChange={(e) => setUser({ ...user, weight: e.target.value })}
    />
  ) : (
    user.weight
  )}
</p>
<p>
  <span>
    <Icon.Activity /> 40 Time : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.forty}
      onChange={(e) => setUser({ ...user, forty: e.target.value })}
    />
  ) : (
    user.forty
  )}
</p>
<p>
  <span>
    <Icon.Activity /> 40 Laser : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.fortyLazer}
      onChange={(e) => setUser({ ...user, fortyLazer: e.target.value })}
    />
  ) : (
    user.fortyLazer
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Pro Shuttle : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.proShuttle}
      onChange={(e) => setUser({ ...user, proShuttle: e.target.value })}
    />
  ) : (
    user.proShuttle
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Vertical Jump : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.verticle}
      onChange={(e) => setUser({ ...user, verticle: e.target.value })}
    />
  ) : (
    user.verticle
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Broad Jump : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.broadJump}
      onChange={(e) => setUser({ ...user, broadJump: e.target.value })}
    />
  ) : (
    user.broadJump
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Bench Press : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.bench}
      onChange={(e) => setUser({ ...user, bench: e.target.value })}
    />
  ) : (
    user.bench
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Squat : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.squat}
      onChange={(e) => setUser({ ...user, squat: e.target.value })}
    />
  ) : (
    user.squat
  )}
</p>
<p>
  <span>
    <Icon.Activity /> Power Clean : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.pClean}
      onChange={(e) => setUser({ ...user, pClean: e.target.value })}
    />
  ) : (
    user.pClean
  )}
</p>
<p>
  <span>
    <Icon.Star /> Strength Rating : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.strength}
      onChange={(e) => setUser({ ...user, strength: e.target.value })}
    />
  ) : (
    user.strength
  )}
</p>
<p>
  <span>
    <Icon.Star /> Speed Rating : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.speed}
      onChange={(e) => setUser({ ...user, speed: e.target.value })}
    />
  ) : (
    user.speed
  )}
</p>
<p>
  <span>
    <Icon.Star /> Star Rating : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.starRating}
      onChange={(e) => setUser({ ...user, starRating: e.target.value })}
    />
  ) : (
    user.starRating
  )}
</p>
<p>
  <span>
    <Icon.Book /> GPA : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.gpa}
      onChange={(e) => setUser({ ...user, gpa: e.target.value })}
    />
  ) : (
    user.gpa
  )}
</p>
<p>
  <span>
    <Icon.Book /> ACT : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.act}
      onChange={(e) => setUser({ ...user, act: e.target.value })}
    />
  ) : (
    user.act
  )}
</p>
<p>
  <span>
    <Icon.Book /> SAT : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.sat}
      onChange={(e) => setUser({ ...user, sat: e.target.value })}
    />
  ) : (
    user.sat
  )}
</p>
<p>
  <span>
    <Icon.Book /> Transcript : &nbsp;
  </span>
  {editingContact ? (
    <input
      type="text"
      value={user.transcript}
      onChange={(e) => setUser({ ...user, transcript: e.target.value })}
    />
  ) : (
    user.transcript
  )}
</p>


                                </div>
                                {/* ... */}
                                <div className="contact-info">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">

                                            {editingContact && (
                                                <>
                                                    <button className="btn btn-primary" onClick={handleSaveContact}>
                                                        <Icon.Check />
                                                        Save
                                                    </button>
                                                    <button className="btn btn-danger" onClick={() => setEditingContact(false)}>
                                                        <Icon.X />
                                                        Cancel
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
