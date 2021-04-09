import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AgeButton from './AgeButton.js';

export default function Profile({ setUser }) {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        setUser(user);
    }, [user])

    return (
        isAuthenticated && (
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '260px'}}>
                <img width="50px" src={user.picture} />
                {user.nickname}
                <AgeButton user={user} setUser={setUser} />
            </div>
        )
    )
}