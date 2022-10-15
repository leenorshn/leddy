import React, { useEffect, useState } from 'react'
import AdminBar from '../../components/AdminBar'
import useSWR from 'swr'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




/* This example requires Tailwind CSS v2.0+ */


function Users() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        const q = query(collection(db, "clients"),);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const ops = [];
            querySnapshot.forEach((doc) => {
                ops.push({ ...doc.data(), id: doc.id });
            });
            console.log(ops);

            setClients(ops);
        });
        return () => unsubscribe()

    }, []);
    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
            <AdminBar />
            <div className="sm:flex sm:items-center mt-4">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-black">Clients</h1>

                </div>

            </div>
            <div className="mt-3 flex flex-col">
                <div className="">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
                                <thead className="bg-black rounded-t-md">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300   py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-50 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                        >
                                            Nom
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300   px-3 py-3.5 text-left text-sm font-semibold text-gray-50 backdrop-blur backdrop-filter sm:table-cell"
                                        >
                                            Phone
                                        </th>

                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300   px-3 py-3.5 text-left text-sm font-semibold text-gray-50 backdrop-blur backdrop-filter"
                                        >
                                            Email
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {clients.map((person, personIdx) => (
                                        <tr key={person.id}>
                                            <td
                                                className={classNames(
                                                    personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6 lg:pl-8'
                                                )}
                                            >
                                                {person.name}
                                            </td>
                                            <td
                                                className={classNames(
                                                    personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-black hidden sm:table-cell'
                                                )}
                                            >
                                                {person.phone}
                                            </td>
                                            <td
                                                className={classNames(
                                                    personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-black hidden lg:table-cell'
                                                )}
                                            >
                                                {person.email}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;

