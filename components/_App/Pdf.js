import React, { useState } from 'react';
import axios from 'axios';
import configData from '../../jsconfig.json';

const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

const DownloadPDF = () => {
    const [pdfLinks, setPdfLinks] = useState([]);

    const fetchPDFIds = async () => {
        try {
            // Fetch PDF IDs from the new API
            const response = await axios.get( `${configData.SERVER_URL}/questionaire/api/userId/${userID}`);
            const pdfIds = response.data; // Response is an array of IDs
            console.log(pdfIds);
            // Create links for each PDF ID
            const pdfUrls = await Promise.all(pdfIds.map(async (id) => {
                const pdfResponse = await axios.get(
                    `${configData.SERVER_URL}/user/api/getpdf?questionaireId=${id}`,
                    {
                        responseType: 'blob', // Set response type to 'blob' for binary data
                    }
                );
                const blob = new Blob([pdfResponse.data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                return { id, url };
            }));

            // Set the array of links in state
            setPdfLinks(pdfUrls);
        } catch (error) {
            console.error('Error fetching PDF IDs or PDFs:', error);
        }
    };

    return (
        <div>
            <button onClick={fetchPDFIds}>Fetch PDFs</button>
            {pdfLinks.length > 0 && (
                <div>
                    <ul>
                        {pdfLinks.map((pdf) => (
                            <li key={pdf.id}>
                                <a href={pdf.url} download={`profile_${pdf.id}.pdf`}>
                                    Download PDF {pdf.id}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DownloadPDF;



/*
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
*/