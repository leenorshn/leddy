import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../components/Login";
import { useAuth } from "../utils/AuthContext";
import Register from "../components/Register";


export default function LoginCom() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { login } = useAuth()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    return (
        <>

            <div className="flex min-h-screen">
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>

                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Login</h2>

                        </div>

                        <div className="mt-8">
                            {show ? <Login setShow={setShow} /> : <Register setShow={setShow} />}


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
