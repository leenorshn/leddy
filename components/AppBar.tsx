import Link from 'next/link';
import React from 'react'
const navig = [{ route: "/", name: "Acceuil" }, { route: "/chambre", name: "Chambres" }, { route: "/contact", name: "Contact" },];

const AppBar = () => {
    return (
        <div className='bg-orange-500 sticky top-0 left-0 right-0 z-50'>
            <header className='flex items-center justify-between  max-w-5xl mx-auto'>
                <Link href="/">
                    <a className='text-2xl font-semibold text-white'>Ivatsiro-Hotel</a>
                </Link>
                <nav>
                    <ul className='flex flex-wrap justify-center space-x-6 py-4 '>
                        {
                            navig.map((nav, i) => {
                                return (<li key={i}>
                                    <Link href={nav.route}>
                                        <a className='text-base font-medium text-white hover:text-orange-50'> {nav.name}</a>
                                    </Link>
                                </li>)
                            })
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default AppBar
