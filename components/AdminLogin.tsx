/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function AdminLogin({ open, setOpen }) {
    const router = useRouter()
    const [form, setForm] = useState({ phone: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    const login = async (phone, password,) => {
        setLoading(true)
        const resp = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                password: password,
                phone: phone
            })
        })
        if (resp.ok) {
            router.push("/admin")
            setLoading(false)
        } else {
            setLoading(false)
            setError(await resp.json())
        }
    }


    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">

                                {loading ? (<h1> encours de traitement ...</h1>) : <>
                                    <div>

                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Login
                                            </Dialog.Title>

                                            <p className='text-red-600'>{error}</p>
                                            <div className="mt-2 space-y-2">
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="phone"
                                                    value={form.phone}
                                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}

                                                    className="w-full rounded-md border border-slate-700 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                                    placeholder="Entrer votre numero"
                                                />
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"

                                                    value={form.password}
                                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                                    className="w-full rounded-md border-slate-700 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                                    placeholder="Entrer votre password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                            onClick={() => login(form.phone, form.password)}
                                        >
                                            connexion
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:col-start-1 sm:mt-0 sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Annuler
                                        </button>
                                    </div></>}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div >
                </div >
            </Dialog >
        </Transition.Root >
    )
}
