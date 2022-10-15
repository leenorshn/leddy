/* This example requires Tailwind CSS v2.0+ */

import { collection, onSnapshot, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { db } from "../utils/firebase";


export default function Rooms({ }) {
    const [chambres, setChambres] = useState([])
    const { setChambre } = useAuth();

    useEffect(() => {
        const q = query(collection(db, "chambres"), where("occuped", "==", false));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const ops = [];
            querySnapshot.forEach((doc) => {
                ops.push({ ...doc.data(), id: doc.id });
            });
            console.log(ops);

            setChambres(ops);
        });
        return () => unsubscribe()

    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-4 px-4 sm:py-6 sm:px-2 lg:max-w-5xl lg:px-3">
                <div className="flex items-center justify-between max-w-5xl">
                    <h2 className="text-xl font-bold text-gray-900">Nos chambre</h2>
                    <Link href="/chambres">
                        <a className="text-blue-600 font-bold hover:underline">Voir plus</a>
                    </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:gap-x-4">
                    {chambres.map((room) => (
                        <div key={room.id} className=" rounded-md">
                            <div className="relative">
                                <div className="relative h-72 w-80 overflow-hidden rounded-lg">
                                    <Image
                                        src={room.url}
                                        alt={room.imageAlt}
                                        layout="fill"
                                        className=" object-cover object-center"
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <h3 className="text-sm font-medium text-gray-900">{room.name}</h3>
                                </div>

                            </div>

                            <div className="mt-6">
                                <Link href={`/payment/${room.id}`}>
                                    <a
                                        onClick={() => {
                                            setChambre(room)
                                        }}

                                        className="relative flex items-center justify-center rounded-md border border-transparent bg-black py-2 px-8 text-sm font-medium text-gray-100 hover:bg-slate-900 hover:text-white"
                                    >
                                        {room.price + " $ /jour "}   Reserver<span className="sr-only">, {room.name}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
