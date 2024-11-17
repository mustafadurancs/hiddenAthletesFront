import React, { useState, useEffect } from 'react';
import axios from 'axios';
import configData from '../../jsconfig.json';
import * as Icon from 'react-feather';

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
                    return { id, paid, creationDate, url };
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
        <div className="container">
            {/* Fancy Button */}
            <div className="text-end mb-3">
                <button 
                    onClick={fetchPDFIds} 
                    className="btn btn-primary btn-lg shadow-sm" 
                    style={{ borderRadius: '25px', padding: '10px 20px' }}
                >
                    Get My Evaluations <Icon.Download />
                </button>
            </div>
    
            {/* Error and Loading Messages */}
            <div id="error-container" className="mb-3">
                {loading && (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p>Loading...</p>
                    </div>
                )}
                {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
            </div>
    
            {/* PDF Links */}
            {pdfLinks.length > 0 && (
                <div className="card shadow p-4">
                    <h3 className="card-title mb-4">My Evaluations</h3>
                    <ul className="list-group">
                        {pdfLinks.map((pdf) => (
                            <li 
                                key={pdf.id} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {pdf.paid ? (
                                    <a 
                                        href={pdf.url} 
                                        download={`profile_${pdf.id}.pdf`} 
                                        className="text-success fw-bold"
                                    >
                                        Download PDF <Icon.Download /> <small className="text-muted">({pdf.creationDate})</small>
                                    </a>
                                ) : (
                                    <a 
                                        href={`${configData.HOME_PAGE}/payment?q_id=${pdf.id}`} 
                                        className="text-danger fw-bold"
                                    >
                                        Pay Now to Download PDF <Icon.Download /> <small className="text-muted">({pdf.creationDate})</small>
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
