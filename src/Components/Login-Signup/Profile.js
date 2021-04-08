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
            <div>
<<<<<<< HEAD
                {user.nickname}
                <img width="37px" src={user.picture} />
=======
                <img width="50px" src={user.picture} />
                {user.nickname}
>>>>>>> 8fe4637df9409771d5fa0cc0455ba75a246032f2
                <AgeButton user={user} setUser={setUser} />
            </div>
        )
    )
}