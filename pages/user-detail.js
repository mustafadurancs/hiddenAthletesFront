import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import configData from '../jsconfig.json';
import PageBanner from "@/components/Common/PageBanner";

function UserDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`${configData.SERVER_URL}/questionaire/api/id/${id}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <PageBanner pageTitle="QUESTIONNAIRE EVALUATION " />
        <div className="container">
            <h1>{user.firstName} {user.lastName}</h1>
            <ul>
                <li><strong>Email</strong>: <input type="text" value={user.email} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
            <li>City: {user.city}</li>
            <li>State: {user.state}</li>
            <li>GPA: {user.gpa}</li>
            <li>SAT: {user.sat}</li>
            <li>Home Address: {user.homeAddress}</li>
            <li>Academic Info: {user.academicInfo}</li>
            <li>General Info: {user.generalInfo}</li>
            <li>2/4 Year: {user.twoFourYear}</li>
            <li>ACT: {user.act}</li>
            </ul>
            <textarea defaultValue="Feedback here..." style={{ width: '100%'}}>

            </textarea>
            <input type="button" value="SUBMIT"/>

        </div>
        </>
    );
}

export default UserDetail;
