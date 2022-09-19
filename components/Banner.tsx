import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='h-[350px] max-w-5xl mx-auto relative'>
            <Image src="/5.jpeg" alt='ok' layout='fill' className=' rounded-b-md object-center object-cover' />
        </div>
    )
}

export default Banner
