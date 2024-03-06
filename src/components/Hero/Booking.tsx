import { Input } from "@/components/ui/input"


import DatePickerWithRange from "../Range/Daterange"

import React from 'react'

export const Booking = () => {
  return (
    <section className='absolute w-screen flex justify-center items-center -bottom-40 min-h-80  sm:h-96'>


        <section className='border-4  w-72 sm:w-10/12 bg-slate-200 border-purple-600 shadow-lg shadow-black rounded-md'>

            <legend className='font-bold raleway text-black text-2xl text-center p-2'>Find A Flight</legend>

            <form className='h-full w-full p-4 flex justify-center gap-7 flex-wrap' action="">

                <section className='flex gap-2'>
                <div className="flex flex-col border-2 rounded-md p-2 justify-center border-purple-600 ">
                        <h2 className="font-bold text-lg">Select Departure</h2>
                        <Input type="text" placeholder="From" className="bg-white" />
                    </div>

                    <div className="flex flex-col border-2 rounded-md p-2 justify-center border-purple-600 ">
                        <h2 className="font-bold text-lg">Select Arrival</h2>
                        <Input type="text" placeholder="To" className="bg-white" />
                    </div>
                
                </section>
                <section className='flex gap-2 justify-center items-center'>
                    
                    <div className="flex flex-col border-2 rounded-md p-2 justify-center border-purple-600 ">
                        <h2 className="font-bold text-lg">Select your dates</h2>
                        <DatePickerWithRange />
                    </div>
                    <div className="flex flex-col border-2 rounded-md justify-center border-purple-600 ">
                        
                        <button className="h-full p-2 hover:text-white font-semibold hover:bg-purple-600">Search Flights</button>
                    </div>
                </section>

            </form>

        </section>
    </section>
  )
}
