//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

//COMPONENTS
import Container from '../../layout/Container'
import { AiOutlineRight } from 'react-icons/ai'

//STYLES
import styles from './HomeProjects.module.scss'
import {
  project01,
  project02,
  project03,
  project04,
} from '../../assets/Project'

function HomeProjects() {
  const cardData = [
    {
      number: '01',
      name: 'Cubevest App',
      description:
        'Redesigned the fintech app and website platform, introduced new concept features to solve most of the biggest challenges faced by users of the product.',
      btnText: 'View on Behance',
      img: project01,
      link: '/',
    },
    {
      number: '02',
      name: 'With-Me Reconnects',
      description:
        'Mobile app for travellers and trippers to reconnect with loved ones within proximity. With GPS enabled feature, easy to find friends and meet.',
      btnText: 'View Case study',
      img: project02,
      link: '/',
    },
    {
      number: '03',
      name: 'Danflight Rider',
      description:
        'A mobile app to book ride especially during the peak hours. Specially designed for corporate employees and private riders.',
      btnText: 'View Case study',
      img: project03,
      link: '/',
    },
    {
      number: '04',
      name: 'Wakers App',
      description:
        'A smart and low internet dependent app that monitor your journey and alert you when closer to your stop. You never get to miss your stop with WAKER!',
      btnText: 'View Case study',
      img: project04,
      link: '/',
    },
  ]
  return (
    <div className={styles.projectsContainer}>
      <Container>
        <Title smallTitle='Selected Projects' title='My Projects' />
      </Container>
      <div className={styles.cardsContainer}>
        {cardData.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </div>
    </div>
  )
}

export default HomeProjects

export const Title = ({ smallTitle, title }) => {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.projectsTitleContainer}>
      <h3
        className={`${styles.projectsTitleSmall} ${
          light ? styles.lightText : styles.darkText
        }`}
      >
        {smallTitle}
      </h3>
      <h1 className={styles.projectsTitle}>{title}</h1>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  smallTitle: PropTypes.string,
}

export const ProjectCard = ({ data }) => {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardNumber}>{data.number}</h3>
      <div className={styles.cardImageContainer}>
        <img src={data.img} alt={data.name} />
      </div>
      <div className={styles.cardDescriptionBtnCon}>
        <div className={styles.cardDescriptionCon}>
          <h2 className={styles.cardTitle}>{data.name}</h2>
          <p
            className={`${styles.cardDescription} ${
              light ? styles.lightText : styles.darkText
            }`}
          >
            {data.description}
          </p>
        </div>

        <div className={styles.cardBtnContainer}>
          <Link
            className={`${styles.cardBtn} ${
              light ? styles.cardBtnLight : styles.cardBtnDark
            }`}
          >
            <p>{data.btnText}</p>
            <div className={styles.arrowCon}>
              <AiOutlineRight className={styles.arrow} size={15} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
}
