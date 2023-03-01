import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/user/api/id?username=${username}&password=${password}`);
            console.log(response.data.username);
            // Do something with the response, such as redirect to a dashboard page
            if(response.data.username==username && response.data.password==password)
                alert(response.data.id);
                //window.location.href="/";
            else
                alert("User name or password")
        } catch (error) {
            console.log(error.response.data);
            // Display an error message to the user
            alert("Not OK");
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
