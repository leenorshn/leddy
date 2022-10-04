import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import Login from '../pages/login';
import Register from '../pages/register';
import { useAuth } from '../utils/AuthContext';
import { auth } from '../utils/firebase';
import Auth from './Auth';

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
            {currentUser ? children : <Auth />}
        </div>
    )
}
