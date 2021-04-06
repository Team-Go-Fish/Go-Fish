import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile({ setUser }) {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        setUser(user);
    }, [user])

    return (
        isAuthenticated && (
            <div>
                {user.nickname}
                <img width="50px" src={user.picture} />
            </div>
        )
    )
}