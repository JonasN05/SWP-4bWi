import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-evenly items-center w-full h-16 bg-dark-grey text-slate-50 font-weight mt-10'>
      <div className='h-full w-1/3 flex justify-center items-center'>
        About the Liga
      </div>

      <div className='h-full w-1/3 flex justify-center items-center'>
        <img src="pictures\Vorschaubild_ABL_78f19_f_1280x720.png" alt='' className="h-full" />
      </div>

      <div className='h-full w-1/3 flex justify-center items-center'>
        © Jonas Nigg 2024
      </div>
    </footer>
  )
}
