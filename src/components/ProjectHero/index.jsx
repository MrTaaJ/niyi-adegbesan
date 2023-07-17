//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//COMPONENTS
import Container from '../../layout/Container'
import { AiOutlineArrowDown } from 'react-icons/ai'

//STYLES
import styles from './ProjectHero.module.scss'

export default function ProjectHero({ data }) {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.projectHeroContainer}>
      <Container>
        <h2 className={styles.projectHeroTitle}>{data.title}</h2>
        <p
          className={`${styles.projectHeroDescription} ${
            light ? styles.lightText : styles.darkText
          }`}
        >
          {data.description}
        </p>
      </Container>
      <div className={styles.projectImageContainer}>
        <img src={data.img} alt={data.name} />
      </div>

      <Container>
        <div
          className={`${styles.projectListContainer} ${
            light
              ? styles.lightProjectListContainer
              : styles.darkProjectListContainer
          }`}
        >
          {data.list.map((value, index) => {
            return (
              <div className={styles.projectList} key={index}>
                <div
                  className={`${styles.projectListDot} ${
                    light ? styles.lightDot : styles.darkDot
                  }`}
                ></div>
                <p
                  className={`${styles.listId} ${
                    light ? styles.lightText : styles.darkText
                  }`}
                >
                  {`${value.id}:`}
                </p>
                <p
                  className={`${styles.listTitle} ${
                    light ? styles.lightText : styles.darkText
                  }`}
                >
                  {`${value.listTitle}`}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
      <div className={styles.projectHeroSubContainer}>
        <div className={styles.projectHeroSub}>
          <h3 className={styles.projectHeroSubtitle}>{data.subtitle}</h3>
          <p
            className={`${styles.projectHeroSubDescription} ${
              light ? styles.lightText : styles.darkText
            }`}
          >
            {data.subDescription}
          </p>

          <div
            className={`${styles.arrowCon} ${
              light ? styles.arrowLight : styles.arrowDark
            }`}
          >
            <AiOutlineArrowDown className={styles.arrow} size={25} />
          </div>

          <Link to={data.link}>
            <button
              className={`${styles.goto} ${
                light ? styles.gotoLight : styles.gotoDark
              }`}
            >
              Go to prototype
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

ProjectHero.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    subDescription: PropTypes.string.isRequired,
    img: PropTypes.any,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        listTitle: PropTypes.string,
      })
    ),
    link: PropTypes.string.isRequired,
  }),
}
