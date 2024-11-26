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
                    console.log(userData);
                    setContact((prevState) => ({
                        ...prevState,
                        name: userData.name || "",
                        lastname: userData.lastname || "",
                        address: userData.address || "",
                        city: userData.city || "",
                        state: userData.state || "",
                        zipCode: userData.zipCode || "",
                        phone: userData.phone || "",
                        email: userData.username || "",
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

        // Validation for empty fields
        if (!contact.gpa || !contact.sat || !contact.act || !contact.name || !contact.lastname || !contact.phone) {
            MySwal.fire({
                title: "Missing Academic Information or Contact information",
                text: "Please fill out the GPA, SAT, ACT, Name, Last Name and Phone Number fields from 'MY PAGE' before submitting the form.",
                icon: "error",
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
            return;
        }

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
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="First Name"
                                            className="form-control"
                                            value={contact.name}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name"
                                            className="form-control"
                                            value={contact.lastname}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Home Address"
                                            className="form-control"
                                            value={contact.address}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {/* Address sections 
                               





                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            className="form-control"
                                            value={contact.city}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <select name="state" id="state" className="form-control"
                                            value={contact.state}
                                            disabled
                                            onChange={handleChange}
                                        >
                                            <option value="" selected="selected">Select a State</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District Of Columbia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="zipCode"
                                            placeholder="Zip Code"
                                            className="form-control"
                                            value={contact.zipCode}
                                            disabled
                                            onChange={handleChange}
                                        //required
                                        />
                                    </div>
                                </div>
                                */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            className="form-control"
                                            value={contact.phone}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email Address"
                                            className="form-control"
                                            value={contact.email}
                                            disabled
                                            onChange={handleChange}
                                        //required
                                        />
                                    </div>
                                </div>

                                <h3>Academic Information</h3>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="gpa"
                                            placeholder="GPA"
                                            className="form-control"
                                            value={contact.gpa}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="sat"
                                            step="1"
                                            placeholder="SAT"
                                            className="form-control"
                                            value={contact.sat}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="act"
                                            placeholder="ACT"
                                            step="1"
                                            className="form-control"
                                            value={contact.act}
                                            disabled
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <p>Are you looking for a two or four year school</p>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <select
                                            name="twoFourYear"
                                            id="year"
                                            className="form-control"
                                            value={contact.twoFourYear}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" selected="selected">2 year / 4 year</option>
                                            <option value="2">2 year</option>
                                            <option value="4">4 year</option>
                                        </select>
                                    </div>
                                </div>
                                <p>Public / Private</p>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <select
                                            name="type"
                                            id="typeSchool"
                                            className="form-control"
                                            value={contact.type}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" selected="selected">Public / Private</option>
                                            <option value="All">All</option>
                                            <option value="Public">Public</option>
                                            <option value="Private">Private</option>
                                        </select>
                                    </div>
                                </div>
                                <p>HBCU</p>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <select
                                            name="attendingHBCU"
                                            id="attendingHBCUSchool"
                                            className="form-control"
                                            value={contact.attendingHBCU}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" selected="selected">Yes / No</option>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                </div>
                                <p>Select the region</p>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <select
                                            name="region"
                                            id="regionSchool"
                                            className="form-control"
                                            value={contact.region}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" selected="selected">Choose Region</option>
                                            <option value="Nationwide">Nation wide</option>
                                            <option value="West">West</option>
                                            <option value="East">East</option>
                                            <option value="South">South</option>
                                            <option value="Mountain">Mountain</option>
                                            <option value="Midwest">Midwest</option>
                                            <option value="Southeast">Southeast</option>
                                            <option value="Northeast">Northeast</option>
                                        </select>
                                    </div>
                                </div>

                                <h6>Football Star Rating</h6>
                                Use the chart to determine your number. If you find yourself between charts add a half point. Example: if some of your numbers are on three and two, then give yourself a 2.
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/images/starChart.png" alt="Star Chart" />
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <select
                                            name="startRatingBasedChart"
                                            id="startRatingBasedChart"
                                            className="form-control"
                                            value={contact.startRatingBasedChart}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" selected="selected">Choose your star rating</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

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