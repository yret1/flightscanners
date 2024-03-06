import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {Skeleton} from '@/components/ui/skeleton'
import axios from 'axios'



interface CardProps {}


const Card = () => {



    return (
        <article className='w-60 h-72 flex flex-col gap-2'>
            <Skeleton className="w-full h-[150px] rounded-md" />
            <Skeleton className="w-full h-[40px] rounded-md" />
            <Skeleton className="w-full h-[40px] rounded-md" />
            <Skeleton className="w-6/12 h-[40px] rounded-md" />
        </article>
    )

}



const ActCard = () => {
    return (
        <article className='w-60 h-72 flex flex-col gap-2'>
            <section className="w-full h-[150px] rounded-md" >
                <Image src={""} alt='destination image'></Image>
            </section>
            <section className="w-full h-[40px] rounded-md">
                <p>{""}</p>
            </section>
            <section className="w-full h-[40px] rounded-md">
                <p>{""}</p>
            </section>
            <Skeleton className="w-6/12 h-[40px] rounded-md" />
    </article>
    )
}
export const Reco = () => {


    const [deals, setDeals] = useState<any>(null);




    useEffect(() => {
       fetch('/api/amadeus')
         .then(response => response.json())
            .then(data => setDeals(data))
      }, []);



    useEffect(() => {
        console.log(deals)
    }, [deals])



    const length : number = 5 || deals.length





  return (
    <section className='w-screen min-h-[500px] flex flex-col justify-center items-center p-10 gap-10'>


        <h1 className='text-2xl font-bold text-white'>Top Deals From CPH</h1>


        <section className='w-10/12 rounded-lg flex justify-center items-center flex-wrap gap-6 p-6 min-h-[400px] bg-white'>

            {deals && deals.length > 3 ? deals.map((deal, index) => {
                return (
                    <ActCard key={index} data={deal} />)
            }): Array.from({length}).map((_, i) => <Card key={i} />)}
        </section>


    </section>
  )
}
