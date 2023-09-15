import React, { useState } from 'react';
import axios from 'axios';

const DownloadPDF = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    const fetchPDF = async () => {
        try {
            // Make a GET request to the PDF endpoint
            const response = await axios.get(
                'https://backend-web-service-vbfh.onrender.com/user/api/getpdf?userId=1',
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


};

export default DownloadPDF;
