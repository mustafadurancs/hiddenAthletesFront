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
                <li><strong>Email : </strong> <input type="text" value={user.email} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>City : </strong><input type="text" value={user.city} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>State : </strong><input type="text" value={user.state} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>GPA : </strong> <input type="text" value={user.gpa} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>SAT : </strong> <input type="text" value={user.sat} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>Home Address : </strong> <input type="text" value={user.homeAddress} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>Academic Info : </strong> <input type="text" value={user.academicInfo} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>General Info : </strong> <input type="text" value={user.generalInfo} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>2/4 Year : </strong> <input type="text" value={user.twoFourYear} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
                <li><strong>ACT : </strong> <input type="text" value={user.act} disabled  style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}/></li>
            </ul>
            <textarea
                rows="20"
                placeholder="Please provide feedback for this student...."
                style={{ width: '100%' }}
            >

            </textarea>

            <input type="button" value="SUBMIT"/>

        </div>
            <PageBanner pageTitle="" />
        </>
    );
}

export default UserDetail;
