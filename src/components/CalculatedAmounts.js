import React from 'react'
import { Helmet } from 'react-helmet'

export default function CalculatedAmounts(props) {
  const {finalValue, reset, monthlyContribution, years, initAmount} = props
  if (!finalValue) {return null}

  const amounts = {
    'Total Coumpound Interest:': finalValue,
    'Total Invested:': parseInt(years) * parseInt(monthlyContribution) * 12 + parseInt(initAmount),
    'Growth/Profit:': finalValue - (parseInt(years) * parseInt(monthlyContribution) *12 + parseInt(initAmount))
  }
  return (
    
    <div className='bg-blue-400 rounded text-white flex flex-col gap-6 p-4'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>925 - Calaculated Amount</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {Object.keys(amounts).map((amount, amountIndex) => {
        return (
          <div key={amountIndex} className='flex items-center gap-2'>
            <h2 className='text-lg  font-semibold sm:text-xl md:text-2xl'>{amount}</h2>
            <p className='text-base font-medium sm:text-lg md:text-xl text-slate-900'>R{amounts[amount].toFixed(2)}</p>
          </div>
        )
      })}
      <button className='px-4 py-2 text-center border border-solid border-white font-bold text-white hover:bg-blue-500 hover:border-slate-900 hover:text-slate-900 duration-200 rounded'
      onClick={reset}>Reset</button>
    </div>
  )
}
