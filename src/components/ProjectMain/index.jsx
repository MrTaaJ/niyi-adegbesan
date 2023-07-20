//REACT DEFAULTS
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//COMPONENTS
import Container from '../../layout/Container'
import { AiOutlineRight } from 'react-icons/ai'

//STYLES
import styles from './ProjectMain.module.scss'
import {
  auditDesktop,
  auditMobile,
  insightDesktop,
  reconnectFlower,
  reconnectFlowerLight,
  researchAssumptions,
  informationArchitectureImg,
  userFlowImg,
  wireframeImg,
  theVisuals,
  solutionUnlock,
  solutionPeople,
  solutionProfile,
  solutionMeet,
} from '../../assets/Project/Reconnect'

export default function ProjectMain() {
  const { light } = useContext(ThemeContext)
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

  const solution = {
    brief:
      'To design a social app that helps people find friends and loved ones within proximity in realtime, I started off by creating information architecture and  further it with a user-flow to show a pictorial representation of how a user will navigate the app.',
  }

  const informationArchitecture = {
    title: 'Information Architecture',
    brief:
      'Gathering all research findings and insight, I started off the design process by creating an information architecture of the solution. This part help me to break the feature into chunks and make it easy for user to understand the product.',
  }

  const userFlow = {
    title: 'User FLow',
    brief:
      'I went on with designing a simple user flow describing actions a user would take and the screens they would encounter to complete a task, as a user navigates through, to ensure a more seamless and flexible user experience.',
  }

  const wireframe = {
    brief:
      'I realized with-me has the potential to connect people through a GPS powered system, I create a Lo-Fi prototype of a digital wireframe to show how users will interact with the solution and the experiences of it. My decisions during this phase were based on findings and assumptions gathered during the research phase.',
  }

  const visuals = {
    brief:
      'In this phase, I improved on the wireframe which represented my idea of what I wanted the solution to look like. one of the biggest challenge i had during this phase was a choice of color and typography that will best communicate the right emotion and feeling.  Eventually, after several trials, i arrived at what i felt was cool and would be a great fit for the app.',
  }

  const solutionCardData = [
    {
      number: '01',
      title: 'User Authentication - Unlocking the vybe',
      description:
        'A 2-step verification process that allows user to very personal information to make the community safe.',
      list: [
        'Login for existing users',
        'Sign up for new users',
        'Personal information and personalizing experience',
      ],
      img: solutionUnlock,
    },

    {
      number: '02',
      title: 'Finding people around',
      description:
        'This part took me a lot of time to come by. I did a thorough research on the best metrics that can be used to determine user’s visibility. This feature allows user to create a presence in the community and becoming visible based on interest, location and contact strength.',
      list: [
        'Search friends around',
        'Receive meet up request from friends around',
        'See friends profile and interest',
      ],
      img: solutionPeople,
    },

    {
      number: '03',
      title: 'User Profile',
      description:
        'This feature allows user to personalize their experience on the app. Users get to set up the interest to determines their visibility to other users.',
      list: [
        'Complete set up',
        'Manage gallery',
        'Account and location settings',
      ],
      img: solutionProfile,
    },

    {
      number: '04',
      title: 'Meet up',
      description:
        'I made this natural and easy to use for friends. Get to chat up, call and plan a meetup. User also get to share pictures of both old memory and the new moments created.',
      img: solutionMeet,
    },
  ]

  const usabilityTest = [
    {
      brief:
        'I tested the design with users across various demography using various testing methods and techniques to identify area of concerns and to make iteration on improving the user experience.',
    },
    {
      brief:
        'During this phase, I created a prioritization map to categorize users concerns into P0, P1, P3 & P4. In this current phase, P0 & P1 were considered in the improved screens to make up the current final design. Overtime, more reviews and tests would be carried out to continuously improve the usability strength of this solution.',
    },
  ]

  const reflection = [
    {
      brief:
        'Being a social enthusiast myself, working on with-me was incredibly rewarding. I got to experiment with some of the new Figma features, and narrowed down my design process. Although I was not able to fully flesh out some other features and designs I wanted within with-me due to a few constraints, it’s not to say I won’t try to incorporate them in future projects down the line.',
    },
    {
      brief:
        'I also got to have conversation with new folks, those I consider friends now. Feels good and I hope everyone gets to have an exciting moment with this magic I made for you all.',
    },
  ]

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
              <img className={styles.projectImg} src={auditMobile} alt='logo' />
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

        {/* The Solution SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'The Solution'} />

          <ProjectBrief briefData={solution} />

          <div className={styles.theSolutionCon}>
            {/* Information Architecture */}
            <div
              className={`${styles.projectAuditCon} ${styles.architectureFlow}`}
            >
              <ProjectBrief briefData={informationArchitecture} />

              <div className={`${styles.projectAuditImage} `}>
                <img
                  className={styles.projectImg}
                  src={informationArchitectureImg}
                  alt='logo'
                />
              </div>
            </div>

            {/* User Flow */}
            <div
              className={`${styles.projectAuditCon} ${styles.architectureFlow}`}
            >
              <ProjectBrief briefData={userFlow} />

              <div className={`${styles.projectAuditImage}`}>
                <img
                  className={styles.projectImg}
                  src={userFlowImg}
                  alt='logo'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wire frame SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'Wireframe'} />

          <ProjectBrief briefData={wireframe} />

          <div
            className={`${styles.projectAuditImage} ${
              styles.architectureFlowImg
            } ${light ? styles.lightImgBg : styles.darkImgBg}`}
          >
            <img className={styles.projectImg} src={wireframeImg} alt='logo' />
          </div>
        </div>

        {/* The Visuals SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'The Visuals'} />

          <ProjectBrief briefData={visuals} />

          <div className={styles.projectAuditImage}>
            <img className={styles.projectImg} src={theVisuals} alt='logo' />
          </div>
        </div>

        {/* The Visuals Card */}
        <div className={styles.visualsCardCon}>
          {solutionCardData.map((data, index) => (
            <SolutionCard data={data} key={index} />
          ))}
        </div>
        <div className={styles.usabilityReflection}>
          <div className={styles.usability}>
            <ProjectBackgroundTitle title={'Usability Test & Improvement'} />
            {usabilityTest.map((data, index) => (
              <ProjectBrief briefData={data} key={index} />
            ))}
          </div>

          <div className={styles.reflection}>
            <ProjectBackgroundTitle title={'Reflection!'} />
            {reflection.map((data, index) => (
              <ProjectBrief briefData={data} key={index} />
            ))}
          </div>
        </div>

        <NextProjectButton
          data={{ link: '/danflight', btnText: 'Danflight Rider' }}
        />
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

export function SolutionCard({ data }) {
  const { light } = useContext(ThemeContext)
  const brief = {
    title: data.title,
    brief: data.description,
  }
  return (
    <div className={styles.solutionCardContainer}>
      <h3 className={styles.solutionCardNumber}>{data.number}</h3>
      <ProjectBrief briefData={brief} />
      {data.list && (
        <div className={styles.solutionListsCon}>
          {data.list.map((value, index) => {
            return (
              <div className={styles.solutionListCon} key={index}>
                <div
                  className={`${styles.solutionListDot} ${
                    light ? styles.lightDot : styles.darkDot
                  }`}
                ></div>
                <p className={styles.solutionList}>{value}</p>
              </div>
            )
          })}
        </div>
      )}

      <div className={styles.solutionImage}>
        <img src={data.img} alt='logo' />
      </div>
    </div>
  )
}

export function NextProjectButton({ data }) {
  const { light } = useContext(ThemeContext)
  return (
    <div className={styles.nextCon}>
      <div className={styles.nextBtnContainer}>
        <Link
          to={data.link}
          className={`${styles.nextBtn} ${
            light ? styles.nextBtnLight : styles.nextBtnDark
          }`}
        >
          <p>{data.btnText}</p>
          <AiOutlineRight className={styles.arrow} size={20} />
        </Link>
      </div>
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

SolutionCard.propTypes = {
  data: PropTypes.object.isRequired,
}

NextProjectButton.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
  }),
}
