import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between bg-dark-grey font-roboto font-black'>
      <div>
        <div className='text-slate-50 text-4xl w-20'>Österreichische Bundesliga</div>
        <div className='text-2xl'>time to play football</div>
      </div>
      <img src="pictures\Österreichische_Fußball_Bundesliga_(ÖFBL)_Logo.png" alt='' className="w-32" />
    </header>
  )
}
