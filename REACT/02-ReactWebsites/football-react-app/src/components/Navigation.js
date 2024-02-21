import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-evenly items-center bg-dark-grey mt-4 text-slate-50 font-black h-10'>

      <div className='' onClick={() => {
        navigate("/");
      }}>
        Bundesligatabelle
      </div>

      <div className='' onClick={() => {
        navigate("/games");
      }}>
        Veschiedene Matches
      </div>

    </div>
  )
}
