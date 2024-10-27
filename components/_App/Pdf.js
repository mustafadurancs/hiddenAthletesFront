import React, { useState, useEffect } from 'react';
import axios from 'axios';
import configData from '../../jsconfig.json';

const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null;

const DownloadPDF = () => {
    const [pdfLinks, setPdfLinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPDFIds = async () => {
        setLoading(true); // Set loading state
        setError(null);   // Clear any previous errors
        try {
            // Fetch PDF IDs from the new API
            console.log(userID);
            const response = await axios.get(`${configData.SERVER_URL}/questionaire/api/userId/${userID}`);
            const pdfIds = response.data;
            console.log(`Returning value from questionaire/api/userId/${userID} -->`, pdfIds);

            if (pdfIds.length === 0) {
                throw new Error('No PDFs found for the user.');
            }

            // Fetch each PDF and create a URL
            const pdfUrls = await Promise.all(pdfIds.map(async (questionaire) => {
                console.log(questionaire);
                const id = questionaire.id;
                const paid = questionaire.paid;
                const creationDate = questionaire.creationDate;
                console.log("id ->", id);

                try {
                    const pdfResponse = await axios.get(
                        `${configData.SERVER_URL}/user/api/getpdf?questionaireId=${id}`,
                        { responseType: 'blob' }
                    );
                    const blob = new Blob([pdfResponse.data], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);
                    return { id, paid, url };
                } catch (pdfError) {
                    console.error(`Error fetching PDF for id ${id}:`, pdfError);
                    return null; // Return null for failed requests
                }


            }));

            // Filter out any null values (failed requests)
            const validPdfUrls = pdfUrls.filter((pdf) => pdf !== null);
            console.log(validPdfUrls);
            if (validPdfUrls.length === 0) {
                throw new Error('No valid PDFs could be fetched.');
            }

            // Set the array of valid PDF links in state
            setPdfLinks(validPdfUrls);


        } catch (fetchError) {
            setError(fetchError.message); // Set error message in state
        } finally {
            setLoading(false); // Stop loading when the request is done
        }
    };

    return (
        <div>
            <button onClick={fetchPDFIds}>Fetch PDFs</button>
            <div id="error-container"></div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {pdfLinks.length > 0 && (
                <div>
                    <ul>
                        {pdfLinks.map((pdf) => (
                            <li key={pdf.id}>
                                {pdf.paid ? (
                                    <a href={pdf.url} download={`profile_${pdf.id}.pdf`}>
                                        Download PDF {pdf.id} - {pdf.creationDate}
                                    </a>
                                ) : (
                                    <a href={`${configData.HOME_PAGE}/payment?q_id=${pdf.id}`}>
                                        Pay Now to Download PDF {pdf.id}
                                    </a>

                                )}

                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DownloadPDF;
