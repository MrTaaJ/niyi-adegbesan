import { Link } from 'react-router-dom'

//components
import Container from '../Container'

// STYLES
import styles from './Footer.module.scss'

export default function Footer() {
  const socials = [
    {
      name: 'Twitter',
      link: 'www.twitter.com',
    },
    {
      name: 'Instagram',
      link: 'www.instagram.com',
    },
    {
      name: 'LinkedIn',
      link: 'www.linkedIn.com',
    },
    {
      name: 'Behance',
      link: 'www.behance.com',
    },
    {
      name: 'Facebook',
      link: 'www.facebook.com',
    },
    {
      name: 'Medium',
      link: 'www.medium.com',
    },
  ]
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <div className={styles.footer}>
          <p className={styles.question}>
            Got an interesting project?{' '}
            <span className={styles.questionBold}>I can help you.</span>
          </p>

          <div className={styles.connectContainer}>
            <div className={styles.mailContainer}>
              <p className={styles.inTouch}>GET IN TOUCH</p>
              <p className={styles.mail}>olaniyi42g@gmail.com</p>
            </div>

            <div className={styles.socialContainer}>
              <p className={styles.inTouch}>Let&#39;s Connect</p>
              <div className={styles.socials}>
                {socials.map((data, index) => (
                  <Link className={styles.social} key={index} to={data.link}>
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
