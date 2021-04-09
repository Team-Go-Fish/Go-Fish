import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function LogoutButton() {
    const { logout, isAuthenticated, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            axios.get(`https://3.136.112.63/user/${user.email}`)
            .then((res) => {
                if (res.data === "TypeError: Cannot read property 'id' of undefined") {
                    axios.post('https://3.136.112.63/users/add/user', user)
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }, [user]);

    return (
        isAuthenticated && (
            <Button style={{height: '40px', marginTop: '5px'}} variant="outline-info" onClick={() => logout()}>
                Log Out
            </Button>
        )
    )
}