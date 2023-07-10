//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

//COMPONENTS
import Layout from '../../layout/Layout'
import HomeHero from '../../components/HomeHero'
// import Container from '../../layout/Container'

//STYLES
import styles from './Home.module.scss'

function Home() {
  const { light } = useContext(ThemeContext)
  return (
    <Layout>
      <HomeHero />
    </Layout>
  )
}

export default Home
