import React from 'react'

export default function Layout(props) {
    const { children } = props
    return (
    <div className='min-h-screen bg-slate-900 text-white flex flex-col gap-10 sm:gap-12 md:gap-14 p-4'>
        <header className='flex flex-col gap-4 items-center justify-center max-w-[800px] pt-16 sm:pt-20 w-full mx-auto'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-center'>925 Calculator
              <p className='flex flex-col text-sm sm:text-base md:text-lg text-opacity-60 text-gray-200 items-center justify-center font-semibold'>A Compound Interest Calculator</p>
              <p className='flex flex-col font-extralight text-xs sm:text-sm md:text-base text-opacity-65 text-gray-400 items-center justify-center'>by mits.com</p>
            </h1>    
            <div className='flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl'>
              <i className="fa-solid fa-money-bill-wave"></i>
              <i className="fa-solid fa-money-bill-wave"></i>
              <i className="fa-solid fa-money-bill-wave"></i>
            </div>
        </header>
        <p className='text-center from-slate-200 text-sm md:text-base lg:text-lg'>Start your journey to financial freedom!</p>
        <main className='flex-1 flex flex-col gap-4 max-w-[600px] w-full mx-auto'>
          {children}
        </main>
        
        <footer></footer>
    </div>
  )
}
