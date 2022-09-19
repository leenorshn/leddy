import React from 'react'
import AdminBar from '../../components/AdminBar'
import useSWR from 'swr'

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




/* This example requires Tailwind CSS v2.0+ */


function Users() {
    const fetcher = (...args) => fetch("/api/users").then(res => res.json())
    const { error, data } = useSWR("/api/users", fetcher)
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
                    <h1 className="text-xl font-semibold text-black">Utilisateurs</h1>

                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
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
                                            Role
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((person, personIdx) => (
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
                                                {person.role}
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

