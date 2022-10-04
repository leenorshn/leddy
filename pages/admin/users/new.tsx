
import { useRouter } from "next/router"
import { useState } from "react"


export default function Example() {
    const [form, setForm] = useState({ phone: "", name: "", role: "admin", password: "" })
    const router = useRouter()



    const newRoom = async () => {

        const resp = await fetch('/customer', {
            method: "POST", body: JSON.stringify({ ...form }), headers: {
                "content-type": "application/json"
            }
        })
        router.replace("/")

    }
    return (
        <div className="mx-auto max-w-3xl bg-slate-300 px-32 pt-0 pb-16">
            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">


                    <div className="pt-4 space-y-3">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Creer chambre</h3>
                            <p className="mt-1 text-sm text-gray-500"></p>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="sm:col-span-3">
                                <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                                    Nom
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="nom"
                                        placeholder="Ex:P-05"
                                        id="nom"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Ex:P-05"
                                        id="phone"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="role"
                                        name="role"
                                        autoComplete="country-name"
                                        value={form.role}
                                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value={"admin"}>Admin</option>
                                        <option value={'gesionnaire'}>Gesionnaire</option>

                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Mot de passe
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="password"
                                        placeholder="Ex:40"
                                        value={form.password}
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        id="password"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                newRoom();
                            }}
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
