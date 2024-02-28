import React from 'react'
import NavigateButton from '../atoms/NavigateButton';

export default function Navigation() {

  return (
    <div className='flex justify-evenly items-center bg-dark-grey mt-4 text-slate-50 font-black h-10'>

      <NavigateButton titel="Bundesligatabelle" path="/"></NavigateButton>
      <NavigateButton titel="Veschiedene Matches" path="/games"></NavigateButton>

    </div>
  )
}
