

import useSWR from "swr"
import { useRouter } from "next/router"
import Image from "next/image"
import { useEffect, useState } from "react"
import { addDoc, collection, doc, onSnapshot, Timestamp, updateDoc } from "firebase/firestore"
import { db } from "../../utils/firebase"
import { useAuth } from "../../utils/AuthContext"




export default function Example() {
    const router = useRouter()
    const [form, setForm] = useState({ name: "", email: "", phone: "", dateStart: "", dateEnd: "" })


    const { chambre } = useAuth()


    const demandReservation = async () => {


        var diff = new Date(form.dateEnd).getDate() - new Date(form.dateStart).getDate();
        const docRef = await addDoc(collection(db, "reservations"), {

            dateStart: new Date(form.dateStart),
            dateEnd: new Date(form.dateEnd),
            room: {
                ...chambre,
            },
            dure: diff,
            totalPayment: chambre.price * diff,
            customer: {
                name: form.name,
                phone: form.phone,
                email: form.email
            },
            date: Timestamp.now(),
            payed: false

        }).then(d => {
            router.replace("/chambre")
        }).catch(err => console.log(err)
        )
        const enseigRef = doc(db, "chambres", chambre.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(enseigRef, {
            occuped: true,
        });
        const docRefOne = await addDoc(collection(db, "clients"), {
            name: form.name,
            phone: form.phone,
            email: form.email,
            date: Timestamp.now()
        })
    }


    return (
        <div className="bg-slate-300">
            <div className="mx-auto max-w-2xl px-4 pt-8 pb-24 sm:px-6 lg:max-w-5xl lg:px-8">

                <div className="flex space-x-6 items-start">

                    <div className="w-1/2">
                        <div className="w-full h-80 relative">
                            <Image src={chambre.url} alt="ok" layout="fill" className="rounded-md" />
                        </div>
                        <div className="flex-1 p-4 z-10">
                            <h1 className="text-xl text-blue-600 font-bold">{chambre.numero}</h1>
                            <h3 className="text-5xl text-black font-medium">{chambre.price} $<span className="text-slate-700 text- font-normal">/jour</span></h3>
                        </div>
                    </div>
                    <form className="">
                        <div>
                            <div className="">
                                <h2 className="text-lg font-medium text-gray-900">Information</h2>

                                <div className="mt-2 grid grid-cols-1 gap-y-3  sm:gap-x-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Nom
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="first-name"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Ex: leddy"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div >
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Postnom
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="last-name"
                                                placeholder="Ex: Kavutirwaki"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                id="email"
                                                placeholder="Ex:leddy@gmail.com"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                placeholder="Ex:0978787878"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="dateEntre" className="block text-sm font-medium text-gray-700">
                                            Date d entree
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="date"
                                                name="dateEntre"
                                                id="dateEntre"
                                                value={form.dateStart}
                                                onChange={(e) => setForm({ ...form, dateStart: e.target.value })}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>


                                    <div className="sm:col-span-2">
                                        <label htmlFor="fdate" className="block text-sm font-medium text-gray-700">
                                            Date de sortie
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="date"
                                                name="date"
                                                id="fdate"
                                                value={form.dateEnd}
                                                onChange={(e) => setForm({
                                                    ...form, dateEnd
                                                        : e.target.value
                                                })}
                                                autoComplete="date"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-start w-full">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                demandReservation()
                                            }}
                                            className="bg-black text-white px-16 py-3 rounded-md">
                                            Reserver
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    )
}
