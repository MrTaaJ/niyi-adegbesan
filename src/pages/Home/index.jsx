//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

//COMPONENTS
import Layout from '../../layout/Layout'
import Container from '../../layout/Container'

//STYLES
import styles from './Home.module.scss'
import Avatar from '../../assets/Hero/avatar.svg'

function Home() {
  const { light } = useContext(ThemeContext)
  return (
    <Layout>
      <Container>
        <div className={styles.homeContainer}>
          <div
            className={`${styles.avatarContainer} ${
              light ? styles.light : styles.dark
            }`}
          >
            <img className={styles.avatar} src={Avatar} alt='avatar' />
          </div>
          <h1>Welcome My Guy</h1>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
