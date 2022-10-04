import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../utils/AuthContext";


export default function Register() {
    const { register } = useAuth()
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: ""
    })
    return (
        <>

            <div className="flex max-h-screen">
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>

                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Creer compte</h2>

                        </div>

                        <div className="mt-8">


                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                                            Nom
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="nom"
                                                name="nom"
                                                type="text"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })

                                                }
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

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
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Confirmer mot de passe
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                value={form.confirmPass}
                                                onChange={(e) => setForm({ ...form, confirmPass: e.target.value })}
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>



                                    <div>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                register(form.email, form.password, form.name)
                                                    .then(d => {
                                                        router.replace("/")
                                                    });
                                            }}
                                            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Creer compte
                                        </button>
                                        <Link href={"/login"}>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-semibold text-blue-700 "
                                            >
                                                Connexion

                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="/7.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
