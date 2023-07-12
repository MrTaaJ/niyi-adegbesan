// REACT DEFAULTS
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

// // COMPONENTS
import NavBar from '../NavBar'
import Footer from '../Footer'

// STYLES
import styles from './Layout.module.scss'
import darkLogo from '../../assets/darkLogo.svg'
import lightLogo from '../../assets/lightLogo.svg'

const Layout = ({ title, description, children }) => {
  const { light, setLight } = useContext(ThemeContext)
  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{`Big Heart's Portfolio | ${title}`}</title>
        <meta name='description' content={description} />
      </Helmet>

      <main className={`${styles.main} ${light ? styles.light : styles.dark}`}>
        <NavBar />
        <button className={`${styles.theme}`} onClick={() => setLight(!light)}>
          <img src={light ? lightLogo : darkLogo} alt='themeLogo' />
        </button>
        {children}
        <Footer />
      </main>
    </HelmetProvider>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Layout
