"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    const [animateEagle, setAnimateEagle] = useState(false);

    useEffect(() => {
        setAnimateEagle(true);
    }, []);

    return (
        <>
            <div className='h-screen flex justify-center items-center text-center bg-gray-50 relative overflow-hidden'>
                <div className={`absolute w-1/2 h-1/2 ${animateEagle ? 'animate-fly' : ''}`}>
                    <Image src={"/eagle.png"} alt='Eagle' layout='fill' objectFit='contain' />
                </div>
                <div className='z-10'>
                <h1 className='text-6xl font-bold text-[#3d52a0] mb-2'>TARIH</h1>
                    <h1 className='text-4xl font-bold text-[#3d52a0]'>History of Kazakhstan</h1>
                    <p className='text-lg text-[#3d52a0] mb-8'>Discover the rich and diverse history of Kazakhstan.</p>
                    <Link href='./chat'>
                        <button className='text-[#3d52a0] bg-white border-2 border-[#3d52a0] rounded-md px-6 font-medium py-1 hover:bg-[#3d52a0] hover:text-white transition-colors duration-300'>
                            Chat Now
                        </button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                @keyframes fly {
                    0% {
                        transform: translateX(100vw);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-fly {
                    animation: fly 2s ease-out forwards;
                }
            `}</style>
        </>
    );
}
