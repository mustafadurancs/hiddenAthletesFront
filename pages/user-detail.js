import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function UserDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/questionaire/api/id/${id}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>GPA: {user.gpa}</p>
        </div>
    );
}

export default UserDetail;
