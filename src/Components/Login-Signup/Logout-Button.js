import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button variant="outline-info" onClick={() => logout()}>
                Log Out
            </Button>
        )
    )
}