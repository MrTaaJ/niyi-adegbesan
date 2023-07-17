//COMPONENTS
import Layout from '../../layout/Layout'
import AboutHero from '../../components/AboutHero'
import AboutMore from '../../components/AboutMore'

//STYLES
import styles from './About.module.scss'

function About() {
  return (
    <Layout title='My Story'>
      <div className={styles.aboutContainer}>
        <AboutHero />
        <AboutMore />
      </div>
    </Layout>
  )
}

export default About
