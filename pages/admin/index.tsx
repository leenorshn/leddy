import React from 'react'
import useSWR from 'swr'
import AdminBar from '../../components/AdminBar'
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




/* This example requires Tailwind CSS v2.0+ */



function Admin() {
    const fetcher = (...args) => fetch("/api/reservation").then(res => res.json())
    const { error, data } = useSWR("/api/reservation", fetcher)
    if (error) {
        return <>{"Erreur:" + error}</>
    }
    if (!data) {
        return <>chargement</>
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
            <AdminBar />
            <div className="sm:flex sm:items-center mt-4">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-black">Reservations</h1>

                </div>

            </div>
            <div className="mt-3 flex flex-col">
                <div className="">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
                                <thead className="bg-black">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                        >
                                            Chambre
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter sm:table-cell"
                                        >
                                            Prix/jour
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter lg:table-cell"
                                        >
                                            Client
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter"
                                        >
                                            Durée
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter"
                                        >
                                            Total
                                        </th>
                                        <th
                                            scope="col"
                                            className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter"
                                        >
                                            Date
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((reservation, reservationIdx) => (
                                        <tr key={reservation.id}>
                                            <td
                                                className={classNames(
                                                    reservationIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6 lg:pl-8'
                                                )}
                                            >
                                                {reservation.room.numero}
                                            </td>
                                            <td
                                                className={classNames(
                                                    reservationIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-800 hidden sm:table-cell'
                                                )}
                                            >
                                                {reservation.room.price}
                                            </td>
                                            <td
                                                className={classNames(
                                                    reservationIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-800 hidden lg:table-cell'
                                                )}
                                            >
                                                {reservation.customer.name}
                                            </td>
                                            <td
                                                className={classNames(
                                                    reservationIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-800'
                                                )}
                                            >
                                                {reservation.dure}
                                            </td>
                                            <td
                                                className={classNames(
                                                    reservationIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-800'
                                                )}
                                            >
                                                {reservation.totalPayment}
                                            </td>
                                            <td
                                                className={classNames(
                                                    reservationIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                    'whitespace-nowrap px-3 py-4 text-sm text-gray-800'
                                                )}
                                            >
                                                {reservation.createdAt}
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

export default Admin;


