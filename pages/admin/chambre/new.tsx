/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
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
                                    Numero
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="numero"
                                        placeholder="Ex:P-05"
                                        id="numero"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Categorie
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value={"VIP"}>VIP</option>
                                        <option value={'Moderne'}>Moderne</option>
                                        <option value={'Simple'}>Simple</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                    Prix/jour($)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Ex:40"
                                        id="price"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                                    image url
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="url"
                                        name="url"
                                        type="text"
                                        placeholder="Ex: https://mmmm/m.jpg"
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
