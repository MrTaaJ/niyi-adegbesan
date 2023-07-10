// REACT DEFAULTS
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

//components
import Container from '../Container'

// STYLES
import styles from './Nav.module.scss'
import Logo from '../../assets/Nav/Logo.svg'
import lightLogo from '../../assets/Nav/lightLogo.svg'
import mobileLightLogo from '../../assets/Nav/mobileLightLogo.svg'
import mobileLogo from '../../assets/Nav/mobileLogo.svg'

function NavBar() {
  const { light } = useContext(ThemeContext)
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
          {size <= 768 ? (
            <img
              className={styles.navLogo}
              src={light ? mobileLightLogo : mobileLogo}
              alt='logo'
            />
          ) : (
            <img
              className={styles.navLogo}
              src={light ? lightLogo : Logo}
              alt='logo'
            />
          )}
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
