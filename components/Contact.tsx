
export default function Contact() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-5xl px-2 py-4 sm:px-2 lg:py-6 lg:px-1">
                <div className="rounded-xl bg-orange-500 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-bold tracking-tight text-white">News Letter</h2>
                        <p className="mt-4 max-w-3xl text-lg text-orange-50">
                            Pour etre informer chaque fois a nos services, veuillez sourscrire a nos newsletter
                        </p>
                    </div>
                    <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            >
                                valider
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
