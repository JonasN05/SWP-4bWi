import React from 'react'
import Present from './Present'
import styles from './GiftTable.module.css'

export default function GiftTable() {
  return (
    <div className={styles.bottomGifts}>
        <Present imgUrl = "redGift.png"/>
        <Present imgUrl = "redGift.png"/>
        <Present imgUrl = "redGift.png"/>
    </div>
  )
}
