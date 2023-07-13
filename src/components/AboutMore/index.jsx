//REACT DEFAULT
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { PropTypes } from 'prop-types'

//COMPONENTS
import Container from '../../layout/Container'

//STYLES
import styles from './AboutMore.module.scss'
import designExperience from '../../assets/About/designExperience.svg'
import peopleManaged from '../../assets/About/peopleManaged.svg'
import designersManaged from '../../assets/About/designersManaged.svg'
import totalExperience from '../../assets/About/totalExperience.svg'

export default function AboutMore() {
  const { light } = useContext(ThemeContext)
  return (
    <Container>
      <div className={styles.aboutMoreContainer}>
        <div className={styles.moreContainer}>
          <h2 className={styles.moreTitle}>Hey, I’m Niyi Adegbesan</h2>
          <div
            className={`${styles.moreText} ${
              light ? styles.lightText : styles.darkText
            }`}
          >
            <p>
              I’m a UX designer from Lagos, Nigeria. When solving problems, I
              draw from both my depth of experience in design, and my breadth of
              experience from design, management, business, and development.
            </p>

            <p>
              Currently working with <span>Paysmosmo.com</span> as a lead UX and
              brand manager for the company enterprise products accross web and
              mobile devices serving 70k+ users. Before now, I worked on
              <span> Zurichat</span> building what seem to be the web3 slack
              with Dapp features, <span>Visqore</span> and{' '}
              <span>Wellness HMO</span>. I graduated with second class
              distinction from Ekiti State University and hold a bachelors in
              Mathematics.
            </p>

            <p>
              The shift in my career happened when i was working on paysmosmo
              e-commerce website as a product sourcing and inventory manager.
              The challenges I faced as a user pushed me to start thinking of
              how to solve real-world challenges, especially for users. In my
              design journey, I’ve had the opportunity to work in various start
              ups accross finance, education, blockchain, health and e-commerce
              building enterprise solution and B2B products
            </p>

            <p>
              Coming from a background in both business and design, I love
              finding a middle ground between business goals and user
              satisfaction. In my free hours, I love enjoying afrobeat music,
              especially at places I can have some thoughtful time with nature.
            </p>
          </div>
        </div>

        <AboutResume />
      </div>
    </Container>
  )
}

export function AboutResume() {
  const { light } = useContext(ThemeContext)

  const yearsData = [
    { name: 'Years of design experience', img: designExperience },
    { name: 'People managed', img: peopleManaged },
    { name: 'Designers managed', img: designersManaged },
    { name: 'Total Years of experience', img: totalExperience },
  ]

  const experienceData = [
    {
      title: '01 Work Experience',
      data: [
        {
          year: '2022',
          company: 'Product Designer - RadicalX',
          place: 'New York, Sept 2022 - Present',
        },
        {
          year: '2021',
          company: 'UX Designer Intern - Zurichat',
          place: 'Lagos, Aug 2021 - October 2021',
        },
        {
          year: '2021',
          company: 'Product Designer - Visqore',
          place: 'Turkey/Lagos, Feb 2021 - Nov 2021',
        },
        {
          year: '2019',
          company: 'Product Designer - Paysmosmo',
          place: 'Product Designer - Paysmosmo',
        },
        {
          year: '2018',
          company: 'Graphics and UI Designer - Freelance',
          place: 'Lagos, Jul 2018 -Jun 2020',
        },
      ],
    },

    {
      title: '02 EDUCATION',
      data: [
        {
          year: '2014',
          company: 'Mathetics - Ekiti State University (EKSU)',
          place: 'Nigeria, May 2007 - Jan 2014',
        },
      ],
    },

    {
      title: '03 LICENSE & CERTIFICATION',
      data: [
        {
          year: '2021',
          company: 'UX Design Professional - Google',
          place: 'Coursera, Oct 2021 -Dec 2021',
        },
      ],
    },
  ]
  return (
    <div className={styles.aboutResumeContainer}>
      <div className={styles.yearsContainer}>
        {yearsData.map((data, index) => (
          <div
            className={`${styles.yearsOfExperience} ${
              light ? styles.lightBackground : styles.darkBackground
            }`}
            key={index}
          >
            <p>{data.name}</p>
            <img
              className={styles.year}
              src={data.img}
              alt='Years of Experience'
            />
          </div>
        ))}
      </div>

      <div className={styles.experienceContainer}>
        {experienceData.map((data, index) => (
          <Experience key={index} data={data} />
        ))}

        <button
          className={`${styles.downloadResume} ${
            light ? styles.downloadResumeLight : styles.downloadResumeDark
          }`}
        >
          Download Resume
        </button>
      </div>
    </div>
  )
}

function Experience({ data }) {
  const { light } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.resumeContainer} ${
        light ? styles.lightResume : styles.darkResume
      }`}
    >
      <p className={styles.resumeTitle}>{data.title}</p>
      <div className={styles.resumeContentContainer}>
        {data.data.map((value, index) => (
          <div key={index} className={`${styles.resumeContent}`}>
            <p className={styles.resumeYear}>{value.year}</p>
            <div className={styles.resumePlaceContainer}>
              <p className={styles.company}>{value.company}</p>
              <p className={styles.place}>{value.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Experience.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        year: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
      })
    ),
  }),
}
