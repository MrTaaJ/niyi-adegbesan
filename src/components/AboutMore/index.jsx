//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

//COMPONENTS
import Container from '../../layout/Container'
import { Title } from '../../components/HomeProjects'

//STYLES
import styles from './AboutHero.module.scss'
import niyi from '../../assets/About/niyi.svg'

export default function AboutHero() {
  const { light } = useContext(ThemeContext)
  return (
    <Container>
      <div className={styles.aboutHeroContainer}>
        <div className={styles.profileCenter}>
          <div
            className={`${styles.profileContainer} ${
              light ? styles.light : styles.dark
            }`}
          >
            <img className={styles.profile} src={niyi} alt='Niyi' />
          </div>
        </div>

        <Title smallTitle='My Story' title='My Journey' />
      </div>
    </Container>
  )
}
