//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

//COMPONENTS
import Container from '../../layout/Container'
import { AiOutlineRight } from 'react-icons/ai'

//STYLES
import styles from './HomeProjects.module.scss'

function HomeProjects() {
  const { light } = useContext(ThemeContext)

  return (
    <div className={styles.projectsContainer}>
      <Container>
        <div className={styles.projectsTitleContainer}>
          <h3
            className={`${styles.projectsTitleSmall} ${
              light ? styles.lightText : styles.darkText
            }`}
          >
            Selected Projects
          </h3>
          <h1 className={styles.projectsTitle}>My Projects</h1>
        </div>
      </Container>

      <ProjectCard />
    </div>
  )
}

export default HomeProjects

export const ProjectCard = () => {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardNumber}>01</h3>
      <div className={styles.cardImageContainer}></div>
      <div className={styles.cardDescriptionCon}>
        <h2 className={styles.cardTitle}>Cubevest App</h2>
        <p
          className={`${styles.cardDescription} ${
            light ? styles.lightText : styles.darkText
          }`}
        >
          Redesigned the fintech app and website platform, introduced new
          concept features to solve most of the biggest challenges faced by
          users of the product.
        </p>
      </div>

      <div className={styles.cardBtnContainer}>
        <Link
          className={`${styles.cardBtn} ${
            light ? styles.cardBtnLight : styles.cardBtnDark
          }`}
        >
          <p>View on Behance</p>
          <div className={styles.arrowCon}>
            <AiOutlineRight className={styles.arrow} size={15} />
          </div>
        </Link>
      </div>
    </div>
  )
}