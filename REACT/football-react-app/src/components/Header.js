import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between bg-dark-grey'>
      <div>
        <div className='text-slate-50 font-black'>Österreichische Bundesliga</div>
        <div>time to play football</div>
      </div>
      <img src="pictures\Österreichische_Fußball_Bundesliga_(ÖFBL)_Logo.png" className="w-32" />
    </header>
  )
}
