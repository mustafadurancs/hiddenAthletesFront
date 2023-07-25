import React, { useEffect, useState } from 'react';
import axios from 'axios';

import configData from '../jsconfig.json';

const SchoolsPage = () => {
    const [schoolsData, setSchoolsData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${configData.SERVER_URL}/school/api/schoolsByParameters?gpa=3&sat=1000&act=20&hbcu=HBCU&type=Private&starRate=1&year=2`);
            const data = response.data;
            setSchoolsData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Schools Data</h1>
            <ul className="schools-list">
                {schoolsData.map((school) => (
                    <li key={school.id} className="school-item">
                        <h2>{school.school}</h2>
                        <p className="school-info">City: {school.city}</p>
                        <p className="school-info">State: {school.state}</p>
                        <p className="school-info">Type: {school.type}</p>
                        <p className="school-info">Region: {school.region}</p>
                        {/* Add more fields as needed */}
                        <div className="school-links">
                            <a href={school.schoolWebsite} target="_blank" rel="noopener noreferrer">School Website</a>
                            <a href={school.athleticWebsite} target="_blank" rel="noopener noreferrer">Athletic Website</a>
                            <a href={school.nicheWebsite} target="_blank" rel="noopener noreferrer">Niche Website</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchoolsPage;
