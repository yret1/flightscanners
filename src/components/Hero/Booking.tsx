import React from 'react'

export const Booking = () => {
  return (
    <section className='absolute left-1/2 -translate-x-1/2 -bottom-28 h-80 w-80 sm:w-96 sm:h-96 rounded-md bg-neutral-100 shadow-2xl shadow-black p-2    '>
        <section className='border-4 h-full border-purple-600 rounded-md'>

            <form className='h-full w-full' action="">

                <legend className='font-bold raleway text-black text-2xl text-center p-2'>Find A Flight</legend>

                <fieldset className='w-full p-2 border-2 border-purple-600 flex justify-between'>
                    <h2 className='text-black font-semibold'>From</h2>
                    <input type="text" />
                </fieldset>

            </form>

        </section>
    </section>
  )
}
