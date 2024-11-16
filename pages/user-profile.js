import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import configData from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: "Congratulations!",
        text: "Your information was successfully sent and will be back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};

const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null;
const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userName') : null;

// Form initial state
const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    homeAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    gpa: "",
    sat: "",
    act: "",
    twoFourYear: "", 
    startRatingBasedChart: "", 
    type: "", 
    region: "",
    notes: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);

    // Fetch user details
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const username = localStorage.getItem('userName');
                const response = await axios.get(`${configData.SERVER_URL}/user/api/id?username=${username}`);
                const userData = response.data;

                // Update the contact state with user details
                setContact((prevState) => ({
                    ...prevState,
                    firstName: userData.firstName || "",
                    lastName: userData.lastName || "",
                    homeAddress: userData.address || "",
                    city: userData.city || "",
                    state: userData.state || "",
                    zipCode: userData.zipCode || "",
                    phoneNumber: userData.phone || "",
                    email: userData.email || ""
                }));
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${configData.SERVER_URL}/questionaire/api/save`;
            const { twoFourYear, startRatingBasedChart, type, region, notes } = contact;
            const payload = { 
                twoFourYear, 
                startRatingBasedChart, 
                type, 
                region, 
                user: { id: userID },
                notes 
            };
            console.log("This is payload-> ", payload);

            const response = await axios.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            
            console.log("THIS IS RESPONSE ==>", response);
            setContact(INITIAL_STATE); // Reset the form state
            alertContent(); // Success alert
        } catch (error) {
            console.log("Error in submission:", error);
        }
    };

    return (
        <div className="contact-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Please fill out the form</h2>
                    <div className="bar"></div>
                    <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                </div>

                <div className="row align-items-center">
                    <h3>General Information</h3>
                    <div className="col-lg-12 col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            value={contact.firstName}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            value={contact.lastName}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="homeAddress"
                                            placeholder="Home Address"
                                            className="form-control"
                                            value={contact.homeAddress}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {/* Add the remaining fields here */}
                                {/* Include Academic and other fields */}
                                <div className="col-lg-12 col-sm-12">
                                    <button type="submit" className="btn btn-primary">Send Form</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
