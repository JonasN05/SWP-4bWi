import React, { useLayoutEffect } from 'react'
import styles from './List.module.css'

export default function List({data}) {
  console.log(data);
  

  return (
      <div>
        {data.map(item=>(<div className={styles.listElement}>{item} </div>))}    
      </div>
  )
       
}
