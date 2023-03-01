import { useState } from 'react';

function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:8080/user/api/id?username=${username}&password=${password}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Invalid username or password');
                }
            })
            .then(userInfo => {
                // store user info in state or in a global state management tool
                history.push('/'); // redirect to the dashboard page
            })
            .catch(error => {
                setError(error.message);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </div>
            <div>
                <button type="submit">Log in</button>
            </div>
            {error && <div>{error}</div>}
        </form>
    );
}

export default Login;
