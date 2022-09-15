import React from 'react'

import {

    FolderIcon,
    HomeIcon,

    UserIcon,

    UsersIcon,

} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Commandes', href: '/admin/', icon: HomeIcon, current: true },
    { name: 'Chambres', href: '/admin/chambre', icon: FolderIcon, current: false },
    { name: 'Clients', href: '/admin/clients', icon: UsersIcon, current: false },
    { name: 'Utilisateurs', href: '/admin/users', icon: UserIcon, current: false },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AdminBar = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <nav className="mt-5 flex-1 flex space-x-4 bg-white px-2">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                    >
                        <item.icon
                            className={classNames(
                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                        {item.name}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default AdminBar
