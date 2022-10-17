import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Pour plus  d information</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Nous disposons d un service client actif. Contactez-nous au
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>+243975207768</p>
                                    <p>+243991799637</p>
                                    <p>+243987561223</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>support@Ivatsiro.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Adresse</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                                Notre bureau administratif est localise a l hotel meme.
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <MapIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>Butembo/Kimemi/Rue Empiace 34</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
