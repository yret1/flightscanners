import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'

export const Footer = () => {
  return (
    <footer className='min-h-60 bg-slate-800 flex flex-wrap justify-center items-center'>
        <section className='flex-1 flex flex-wrap p-10 justify-center items-center gap-20'>

            <div className="flex justify-center items-center">
                <Image src={Logo} height={80} alt="Logo"></Image>
                <h2 className='text-[#6254f3] font-bold'>Flightscanner</h2>
            </div>
            <ul className='flex flex-col px-3 border-l-2 border-[#6254f3]'>
            <h2 className='text-neutral-500 font-bold text-3xl'>LINKS</h2>
            <li className='text-md hover:text-[#6254f3]'><Link href={"/"}>Home</Link></li>
            <li className='text-md hover:text-[#6254f3]'><Link href={"/deals"}>Deals</Link></li>
            <li className='text-md hover:text-[#6254f3]'><Link href={"/about"}>About</Link></li>
            <li className='text-md hover:text-[#6254f3]'><Link href={"/contact"}>Contact</Link></li>
            </ul>
            <div className='text-center'>
                <h2 className='text-[#6254f3] font-bold text-3xl'>VISIT</h2>
                <p className='text-neutral-500 text-md'>1234 Main St</p>
                <p className='text-neutral-500 text-md'>Malmö, Sweden</p>
            </div>
        </section>

    </footer>
  )
}
