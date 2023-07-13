//REACT DEFAULT
// import { useContext } from 'react'
// import { ThemeContext } from '../../contexts/ThemeContext'

//COMPONENTS
import Layout from '../../layout/Layout'
import AboutHero from '../../components/AboutHero'
// import AboutProjects from '../../components/AboutProjects'
// import AboutProcess from '../../components/AboutProcess'
// import Container from '../../layout/Container'

//STYLES
import styles from './About.module.scss'

function About() {
  // const { light } = useContext(ThemeContext)
  return (
    <Layout title='My Story'>
      <div className={styles.aboutContainer}>
        <AboutHero />
        {/* <AboutProjects /> */}
        {/* <AboutProcess /> */}
      </div>
    </Layout>
  )
}

export default About
