// REACT DEFAULTS
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

// STYLES
import styles from './MobileNav.module.scss'
import Logo from '../../assets/Nav/Logo.svg'

function MobileNavBar({ link, title }) {
  return (
    <div className={styles.navContainer}>
      <Link to={'/'} className={styles.logoContainer}>
        <img className={styles.navLogo} src={Logo} alt='logo' />
        <p className={styles.logoTitle}>Niyi Adegbesan</p>
      </Link>
      <Link to={link} className={styles.navLink}>
        {title}
      </Link>
    </div>
  )
}

MobileNavBar.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default MobileNavBar
