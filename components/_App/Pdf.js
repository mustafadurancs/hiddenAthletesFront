import React, { useState } from 'react';
import axios from 'axios';

import configData from '../../jsconfig.json';

const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null;
const DownloadPDF = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    const fetchPDF = async () => {
        try {
            // Make a GET request to the PDF endpoint
            const response = await axios.get(
                `${configData.SERVER_URL}/user/api/getpdf?userId=${userID}`,
                {
                    responseType: 'blob', // Set the response type to 'blob' to handle binary data
                }
            );

            // Create a blob URL from the response data
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);

            // Set the PDF URL in state
            setPdfUrl(url);
        } catch (error) {
            console.error('Error fetching PDF:', error);
        }
    };

    return (
        //Drop down koy ve "football" secili gelsin
        <div>
            <button onClick={fetchPDF}>Fetch PDF</button>
            {pdfUrl && (
                <div>
                    <a href={pdfUrl} download="profile.pdf">
                        Download Your Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default DownloadPDF;
