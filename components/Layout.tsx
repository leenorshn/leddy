import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import Login from '../pages/login';

import { useAuth } from '../utils/AuthContext';
import { auth } from '../utils/firebase';


export const Layout = ({ children }) => {
    const { currentUser, setCurrentUser } = useAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);

        });

        return unsubscribe();
    }, []);

    return (
        <div>
            {currentUser ? children : <Login />}
        </div>
    )
}
