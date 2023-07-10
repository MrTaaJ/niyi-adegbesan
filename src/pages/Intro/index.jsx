//REACT DEFAULT

//STYLES
import styles from './Intro.module.scss'

function Intro() {
  return (
    <div className={styles.introContainer}>
      <p className={styles.introName}> Niyi Adegbesan</p>
      <div className={styles.introLoader}>
        <div className={styles.introInnerLoader}></div>
      </div>
    </div>
  )
}

export default Intro
