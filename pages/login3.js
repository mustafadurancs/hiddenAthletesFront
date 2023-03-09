import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:8080/user/api/id?username=${username}&password=${password}`
        );
        const data = await response.json();
        console.log(data);
        if (data.id) {
            localStorage.setItem("id", data.username);
            setIsAuthenticated(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("id");
        setIsAuthenticated(false);
    };

    const ProfilePage = () => {
        const userId = localStorage.getItem("id");
        return <h2>Welcome, User {userId}!</h2>;
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <ProfilePage />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default LoginPage;
