import React from 'react'
import AdminBar from '../../../components/AdminBar'
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


import useSWR from "swr"
import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */


function Chambres() {
    const fetcher = (...args) => fetch("/api/chambre").then(res => res.json())
    const { error, data } = useSWR("/api/chambre", fetcher)
    if (error) {
        return <>{"Erreur:" + error}</>
    }
    if (!data) {
        return <>chargement...</>
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
            <AdminBar />
            <div className="sm:flex sm:items-center mt-4">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Chambres</h1>

                </div>
                <Link href={`/admin/chambre/new`}>
                    <a className='bg-blue-600 text-white px-8 py-2 rounded-md cursor-pointer'>Nouveau</a>
                </Link>


            </div>
            <div className="mt-8 flex flex-col">
                <div className="">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                        >
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((room, roomIdx) => (
                                        <tr key={room.id}>
                                            <td
                                                className={classNames(
                                                    roomIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                                )}
                                            >
                                                {room.numero}
                                            </td>
                                            <td
                                                className={classNames(
                                                    roomIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                                                )}
                                            >
                                                {room.price}
                                            </td>
                                            <td
                                                className={classNames(
                                                    roomIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                                                )}
                                            >
                                                {room.features}
                                            </td>
                                            <td
                                                className={classNames(
                                                    room.payed ? 'text-[#21CE99]' : ' text-red-600',
                                                    'whitespace-nowrap px-3 py-4 text-sm '
                                                )}
                                            >
                                                {room.payed ? "Paye" : "Non-Payer"}
                                            </td>
                                            <td
                                                className={classNames(

                                                    'whitespace-nowrap px-3 py-4 text-sm text-slate-600 '
                                                )}
                                            >
                                                {room.dure}
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

export default Chambres;

