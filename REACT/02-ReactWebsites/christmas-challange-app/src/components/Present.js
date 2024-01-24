import React, {useState } from 'react'
import styles from './Present.module.css'

export default function Present({imgUrl}) {
   const [isOpen, setOpen] = useState(false);
   console.log(isOpen);

  return (
      <div onClick={()=>{
        setOpen(!isOpen);
    }}>
        <img src={imgUrl} className={isOpen?styles.gift:styles.giftO}/>
      </div>
  )
}
