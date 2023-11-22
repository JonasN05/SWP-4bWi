import React, { useState } from 'react'
import styles from './Button.module.css'

export default function Button(props) {
    const[isOn, setIsOn] = useState(false);
  return (
    <div className={styles.main} onClick={()=>{
        alert("Clicked");
        setIsOn(!isOn);
    }}>
      {props.name}
      {props.age}
    </div>
  )
}

