import styles from './Card.module.css'

export default function Card(props) {


  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src={props.img}/>
      </div>

      <div className={styles.name}>
        {props.name}
      </div>

      <div className={styles.description}>
        {props.description}
      </div>
      
    </div>
  )
}