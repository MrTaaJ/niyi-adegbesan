//REACT DEFAULTS
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import PropTypes from 'prop-types'

//COMPONENTS
import Container from '../../layout/Container'

//STYLES
import styles from './ProjectMain.module.scss'
import {
  auditDesktop,
  auditMobile,
  insightDesktop,
  insightMobile,
  reconnectFlower,
  reconnectFlowerLight,
  researchAssumptions,
} from '../../assets/Project/Reconnect'

export default function ProjectMain() {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
  }, [size])

  const briefsData = [
    {
      title: 'Brief',
      brief:
        'Through independent research and effort, analysis of specific needs and opportunities, I found the need to create a system and visual narrative with unique and unified outcome. A system that improve social interaction and strengthen family ecosystem.',
    },
    {
      title: 'Approach',
      brief:
        'I divided the process into Research, Strategy, Ideate, Design and Testing. Research allowed me to dig into the topic and figure out the best approach and design that best solve the problem. For strategy, I focus on breaking down my finding into design objectives. These objectives allowed me to enter into the phase where I had a thorough process of Sketching, Wireframing, Iterating and Testing.',
    },
    {
      title: 'Outcome',
      brief:
        'From research and ideation, I created with-me, a mobile social app that allows friends within proximity to find and connect each other with the triple bottom lines (people, profit and planet). The design brings access to real time awareness of friends around and also improve social connectivity. Most importantly bridging gap and affirming best guess of friends around. Cool you say? Yeah! Cool.',
    },
  ]

  const researchData = [
    {
      title: 'Type',
      description:
        'In order to understand user behavior, experience and acceptance of social-platform app, I conducted a  qaulitative survey with 15 people of age 22 - 49 years (all gender) to know issues faced while trying to link up with friends with their perimeters.',
    },
    {
      title: 'Goal',
      description:
        'It is centred around understanding how users adopt social-platform app and their interactions with such app. To gain indepth knowledge on user expectations and objectives when using such app. The research is also to help in identifying the opportunities and scalability of the product.',
    },
    {
      title: 'Pattern',
      description:
        'The research questions is delibrately constructed around understanding user’s needs (expectations), behaviours, experience and interactive nature.',
    },
  ]

  const audit = {
    brief:
      'It was a bit of shock that there was no well known social app in Nigeria providing a location based service (LBS) in real time for app specifically designed for reuniting friends as at the the time of this project. Hence, I opted for non-African based apps providing services in close range to what I am about to create to better understand the market.',
  }

  const primaryResearch = [
    {
      brief:
        'I interviewed 15 people of different work background and demography to find out their pain points and needs when trying to connect with loved ones within their proximities. Findings from this research formed the basis of my insight and solution.',
    },
    {
      brief:
        'Traditionally, people find research to be a kind of boring and stressful thing to do, but adopting a new trend, especially as a designer, it’s much exciting than ever. Most of these characters have great connection with the problem and have got creative minds, I consider some as friends now though.',
    },
  ]

  const foundationalAssumption = {
    brief:
      'Findings from the primary research was the basis for foundational assumptions. I grouped them into sections based on the hypothesis and inferences formed in the  research process.',
  }

  const inferences = {
    brief:
      'From the foundational assumption which formed the basis of my inference, I was able to create insights which formed the pivot of the proposed solution.',
  }

  return (
    <Container>
      <div className={styles.projectMainContainer}>
        {/* PROJECT BACKGROUND SECTION */}
        <div className={styles.projectMainOverview}>
          <ProjectBackgroundTitle title={'The Project Background'} />

          <div className={styles.briefsCon}>
            {briefsData.map((briefData, index) => {
              return <ProjectBrief briefData={briefData} key={index} />
            })}
          </div>
        </div>

        {/* RESEARCH SECTION */}
        <div className={styles.projectResearchCon}>
          <ProjectBackgroundTitle title={'The Research'} />

          <div className={styles.projectResearch}>
            {researchData.map((researchData, index) => {
              return <ProjectResearch researchData={researchData} key={index} />
            })}
          </div>
        </div>

        {/* AUDIT SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'Competitive Audit'} />

          <ProjectBrief briefData={audit} />

          <div className={styles.projectAuditImage}>
            {size <= 768 ? (
              <img
                className={styles.projectImg}
                src={auditDesktop}
                alt='logo'
              />
            ) : (
              <img
                className={styles.projectImg}
                src={auditDesktop}
                alt='logo'
              />
            )}
          </div>
        </div>

        {/* PRIMARY RESEARCH SECTION */}
        <div className={styles.projectPrimaryCon}>
          <ProjectBackgroundTitle title={'Primary Research'} />

          <ProjectBrief briefData={primaryResearch[0]} />
          <div className={styles.projectPrimaryInsightful}>
            <h3 className={styles.insightful}>
              Insightful, Cheerful, Lively, Problem Solving
            </h3>
            <ProjectBrief briefData={primaryResearch[1]} />
          </div>
        </div>

        {/* ASSUMPTION SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'Foundational Assumptions'} />

          <ProjectBrief briefData={foundationalAssumption} />

          <div className={styles.projectAuditImage}>
            <img
              className={styles.projectImg}
              src={researchAssumptions}
              alt='logo'
            />
          </div>
        </div>

        {/* Inferences and Insights SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'Inferences and Insights'} />

          <ProjectBrief briefData={inferences} />

          <div className={styles.projectAuditImage}>
            <img
              className={styles.projectImg}
              src={insightDesktop}
              alt='logo'
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export function ProjectBackgroundTitle({ title }) {
  return <h2 className={styles.projectBackground}>{title}</h2>
}

export function ProjectBrief({ briefData }) {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.projectBriefContainer}>
      {briefData.title && (
        <h3 className={styles.projectBriefTitle}>{briefData.title}</h3>
      )}
      <p
        className={`${styles.projectBriefSubtitle} ${
          light ? styles.lightText : styles.darkText
        }`}
      >
        {briefData.brief}
      </p>
    </div>
  )
}

export function ProjectResearch({ researchData }) {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.researchContainer}>
      <div className={styles.researchImageContainer}>
        <img
          src={light ? reconnectFlowerLight : reconnectFlower}
          alt={researchData.title}
        />
        <p className={styles.researchDataTitle}>{researchData.title}</p>
      </div>
      <p
        className={`${styles.projectBriefSubtitle} ${
          light ? styles.lightText : styles.darkText
        }`}
      >
        {researchData.description}
      </p>
    </div>
  )
}

ProjectBackgroundTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

ProjectBrief.propTypes = {
  briefData: PropTypes.shape({
    title: PropTypes.string,
    brief: PropTypes.string,
  }),
}

ProjectResearch.propTypes = {
  researchData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}
