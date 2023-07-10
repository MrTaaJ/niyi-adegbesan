// REACT DEFAULTS
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

//components
import Container from '../Container'

// STYLES
import styles from './Nav.module.scss'
import Logo from '../../assets/Nav/Logo.svg'

function NavBar() {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
  }, [size])

  return (
    <Container>
      <div className={styles.navContainer}>
        <Link to={'/'} className={styles.logoContainer}>
          <img className={styles.navLogo} src={Logo} alt='logo' />
          <p className={styles.logoTitle}>Niyi Adegbesan</p>
        </Link>
        <div className={styles.desktopNavLink}>
          <Link to={'/projects'} className={styles.navLink}>
            Projects
          </Link>
          <Link to={'/about'} className={styles.navLink}>
            About me
          </Link>
        </div>
        {/* {size <= 768 ? (
        <Link to={link} className={styles.navLink}>
          {title}
          </Link>
      ) : (
        <div className={styles.desktopNavLink}>
        <Link to={'/projects'} className={styles.navLink}>
        Projects
        </Link>
        <Link to={link} className={styles.navLink}>
        About me
        </Link>
        </div>
      )} */}
      </div>
    </Container>
  )
}

export default NavBar
