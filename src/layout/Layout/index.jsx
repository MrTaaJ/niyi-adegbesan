// REACT DEFAULTS
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { PropTypes } from 'prop-types'

// // COMPONENTS
// import NavBar from '../NavBar'
// import Footer from '../Footer'

// STYLES
import styles from './Layout.module.scss'

const Layout = ({ title, description, children }) => {
  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{`Big Heart's Portfolio | ${title}`}</title>
        <meta name='description' content={description} />
      </Helmet>

      <main className={styles.container}>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
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
