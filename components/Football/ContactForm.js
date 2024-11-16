import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from 'next/link';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import configData from '../../jsconfig.json';

const alertContent = () => {
    MySwal.fire({
        title: "Congratulations!",
        text: "Your information was successfully sent and will be back to you soon",
        icon: "success",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};

const alertContentNotLoggedin = () => {
    MySwal.fire({
        title: "You are Not Logged In!",
        text: "You have to log in to submit your form!",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};

const alertCheckboxNotChecked = () => {
    MySwal.fire({
        title: "Agreement Required!",
        text: "You must agree to the Terms and Privacy Policy to submit the form.",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};

const INITIAL_STATE = {
    name: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
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
    const router = useRouter();
    const [contact, setContact] = useState(INITIAL_STATE);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // State for checkbox

    useEffect(() => {
        const userID = typeof window !== 'undefined' ? localStorage.getItem('id') : null;
        if (!userID) {
            alertContentNotLoggedin();
            router.push('/login'); // Redirect to login page if not logged in
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    useEffect(() => {
        if (isAuthenticated) {
            const fetchUserDetails = async () => {
                try {
                    const username = localStorage.getItem('userName');
                    const response = await axios.get(`${configData.SERVER_URL}/user/api/id?username=${username}&password`);
                    const userData = response.data;

                    setContact((prevState) => ({
                        ...prevState,
                        name: userData.name || "",
                        lastname: userData.lastname || "",
                        address: userData.address || "",
                        city: userData.city || "",
                        state: userData.state || "",
                        zipCode: userData.zipCode || "",
                        phone: userData.phone || "",
                        email: userData.email || "",
                        sat: userData.sat || "",
                        gpa: userData.gpa || "",
                        act: userData.act || ""
                    }));
                } catch (error) {
                    console.error("Error fetching user details:", error);
                }
            };

            fetchUserDetails();
        }
    }, [isAuthenticated]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isChecked) {
            alertCheckboxNotChecked();
            return;
        }
        try {
            const url = `${configData.SERVER_URL}/questionaire/api/save`;
            const userID = localStorage.getItem('id');
            const { twoFourYear, startRatingBasedChart, type, region, notes } = contact;
            const payload = { 
                twoFourYear, 
                startRatingBasedChart, 
                type, 
                region, 
                user: { id: userID },
                notes 
            };

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

    if (!isAuthenticated) {
        return null; // Render nothing while redirecting
    }

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
                                {/* Other form fields go here */}

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="notes"
                                            cols="30"
                                            rows="5"
                                            placeholder="Leave your note here .... "
                                            className="form-control"
                                            value={contact.generalInfo}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            id="flexCheckDefault" 
                                            checked={isChecked}
                                            onChange={handleCheckboxChange} 
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            By checking this, you agree to our <Link href="/term-condition"><a>Terms</a></Link> and <Link href="/privacy-policy"><a>Privacy policy</a></Link>.
                                        </label>
                                    </div>
                                </div>

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
