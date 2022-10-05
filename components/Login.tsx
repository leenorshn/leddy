import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useAuth } from '../utils/AuthContext';

const Login = ({ setShow }) => {

    const router = useRouter()
    const { login } = useAuth()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    return (
        <div>
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            autoComplete="email"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            autoComplete="current-password"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>



                <div>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            login(form.email, form.password)
                                .then(d => {
                                    router.replace("/")
                                });
                        }}
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Connexion
                    </button>

                    <button
                        onClick={() => setShow(false)}

                        className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-semibold text-blue-700 "
                    >
                        Creer compte
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Login
