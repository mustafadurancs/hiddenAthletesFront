return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <button onClick={fetchPDFIds}>Get My Evaluations</button>
        <div id="error-container"></div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {pdfLinks.length > 0 && (
            <div style={{ textAlign: 'right' }}>
                <ul>
                    {pdfLinks.map((pdf) => (
                        <li key={pdf.id}>
                            {pdf.paid ? (
                                <a href={pdf.url} download={`profile_${pdf.id}.pdf`}>
                                    Download PDF {pdf.id} - {pdf.creationDate}
                                </a>
                            ) : (
                                <a href={`${configData.HOME_PAGE}/payment?q_id=${pdf.id}`}>
                                    Pay Now to Download PDF {pdf.id} - {pdf.creationDate}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);
