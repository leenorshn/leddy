import React, { createContext, useContext, useEffect, useState } from 'react';
import { signOut, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe();
    }, []);

    async function login(email, password) {
        const resp = await signInWithEmailAndPassword(auth, email, password);
        setCurrentUser(resp.user);
        return resp;
    }

    async function register(email, password, name) {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        const user = resp.user;
        console.log(user);

        const docRef = await addDoc(collection(db, "users"), {
            date: Timestamp.now(),
            uid: user.uid,
            email: user.email,
            name: name,
        });
        setCurrentUser(resp.user);
        return resp;
    }

    async function logout() {
        setCurrentUser(null);
        await signOut(auth);
        console.log('logout');
        return;
    }


    const value = {
        currentUser,
        setCurrentUser,
        login,
        register,
        logout,
        image,
        setImage
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}