//REACT DEFAULTS
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

//COMPONENTS
import {
  ProjectBackgroundTitle,
  ProjectBrief,
  ProjectResearch,
  NextProjectButton,
} from '../ProjectMain'
import Container from '../../layout/Container'

//STYLES
import styles from './DanflightMain.module.scss'
import {
  competitiveAuditDesktopDark,
  competitiveAuditDesktopLight,
  competitiveAuditMobile,
  findingDesktopDark,
  findingDesktopLight,
  findingMobile,
  understandingUserDesktopDark,
  understandingUserDesktopLight,
  understandingUserMobile,
} from '../../assets/Project/Danflight'

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
      briefs: [
        'Techhack is software start up who found opportunity in transport sector in Lagos, Nigeria. They identify a wide gap between private cap and BRT bus. My role in this was to create the MVP for the product and also carry out a usability testing to validate that the idea is scalable.',
      ],
    },
    {
      title: 'Problem',
      briefs: [
        'Connects corporate workers with drivers by creating a mobile platform that make it possible to book a ride in time with ease.',
      ],
    },
    {
      title: 'Solution',
      briefs: [
        'Danflite presence platform makes it possible to connects corporate workers with drivers to book ride in time with ease. It provide access with consistent information about trip information. Users are able to book trip in real time.',
      ],
    },
  ]

  const researchData = [
    {
      title: 'Goal',
      descriptions: [
        'We want to know the biggest challenges faced by corporate workers during the early, late or peak hours to board buses in the metro so we can design a usable platform that solve the transportational problems.',
      ],
    },
    {
      title: 'Method',
      descriptions: [
        'Competitive analysis of existing apps and websites that offer private bookings to see what experiences are appropriate and most/least used. User Interview and/or focused group to see what features are preferred and what pains and challenges need to be solved.',
      ],
    },
    {
      title: 'Objectives',
      descriptions: [
        '1. To understand the reasons for booking a private vehicle.',
        '2. To identify opportunities in the transport sector yet untapped.',
        '3. Come up with a clear design solution that will solve user needs and improve their experiences.',
      ],
    },
    {
      title: 'Participants',
      descriptions: [
        'Corporate employers that take public transports,  Early and late time workers, People looking for middle ground between Danfo and Uber.',
      ],
    },
  ]

  const understandingUser = {
    briefs: [
      'These are the insights from the research that helped me to build a foundational assumption about who our most ideal potential user might be and what kind of questions to ask.',
    ],
  }

  const competitiveAudit = {
    briefs: [
      'Understanding the existing competitors in the market helped me to understand the attitude of users, their concerns and how to leverage the inadequacies.',
    ],
  }

  const findings = {
    briefs: [
      'From my interviews, 3 user interviews produced a lot of qualitative data to synthesize in order to fully understand the problem faced by commuters to book ride and enjoy quality trips.',
      'User ages ranged from 22–55 years old and occupations were deliberately targeted at corporate workers who work on-site to those taking trips as main hobby. All respondents are either corporate employees, corporate employers or college students from average homes.  All spend hours per week trying to board buses to & fro.',
      'I used the affinity map technique of writing insights to better understand the problem of boarding buses for commuters by arranging the insights by their value to the Design goals. Then I broke it down further into needs, fears and behaviours of the users I identified.',
    ],
  }

  const solution = {
    briefs: [
      'To design a social app that helps people find friends and loved ones within proximity in realtime, I started off by creating information architecture and  further it with a user-flow to show a pictorial representation of how a user will navigate the app.',
    ],
  }

  const informationArchitecture = {
    title: 'Information Architecture',
    briefs: [
      'Gathering all research findings and insight, I started off the design process by creating an information architecture of the solution. This part help me to break the feature into chunks and make it easy for user to understand the product.',
    ],
  }

  const userFlow = {
    title: 'User FLow',
    briefs: [
      'I went on with designing a simple user flow describing actions a user would take and the screens they would encounter to complete a task, as a user navigates through, to ensure a more seamless and flexible user experience.',
    ],
  }

  const wireframe = {
    briefs: [
      'I realized with-me has the potential to connect people through a GPS powered system, I create a Lo-Fi prototype of a digital wireframe to show how users will interact with the solution and the experiences of it. My decisions during this phase were based on findings and assumptions gathered during the research phase.',
    ],
  }

  const visuals = {
    briefs: [
      'In this phase, I improved on the wireframe which represented my idea of what I wanted the solution to look like. one of the biggest challenge i had during this phase was a choice of color and typography that will best communicate the right emotion and feeling.  Eventually, after several trials, i arrived at what i felt was cool and would be a great fit for the app.',
    ],
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
      // img: solutionUnlock,
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
      // img: solutionPeople,
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
      // img: solutionProfile,
    },

    {
      number: '04',
      title: 'Meet up',
      description:
        'I made this natural and easy to use for friends. Get to chat up, call and plan a meetup. User also get to share pictures of both old memory and the new moments created.',
      // img: solutionMeet,
    },
  ]

  const usabilityTest = [
    {
      briefs: [
        'I tested the design with users across various demography using various testing methods and techniques to identify area of concerns and to make iteration on improving the user experience.',
        'During this phase, I created a prioritization map to categorize users concerns into P0, P1, P3 & P4. In this current phase, P0 & P1 were considered in the improved screens to make up the current final design. Overtime, more reviews and tests would be carried out to continuously improve the usability strength of this solution.',
      ],
    },
  ]

  const reflection = [
    {
      briefs: [
        'Being a social enthusiast myself, working on with-me was incredibly rewarding. I got to experiment with some of the new Figma features, and narrowed down my design process. Although I was not able to fully flesh out some other features and designs I wanted within with-me due to a few constraints, it’s not to say I won’t try to incorporate them in future projects down the line.',
        'I also got to have conversation with new folks, those I consider friends now. Feels good and I hope everyone gets to have an exciting moment with this magic I made for you all.',
      ],
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

        {/* Understanding User SECTION */}
        <div className={styles.projectRepeatCardCon}>
          <ProjectBackgroundTitle title={'Understanding the user'} />

          <ProjectBrief briefData={understandingUser} />

          <div className={styles.projectRepeatCardImage}>
            {size <= 768 ? (
              <img
                className={styles.projectImg}
                src={understandingUserMobile}
                alt='logo'
              />
            ) : (
              <img
                className={styles.projectImg}
                src={
                  light
                    ? understandingUserDesktopLight
                    : understandingUserDesktopDark
                }
                alt='logo'
              />
            )}
          </div>
        </div>

        {/* Competitive Audit SECTION */}
        <div className={styles.projectRepeatCardCon}>
          <ProjectBackgroundTitle title={'Competitive Audit'} />

          <ProjectBrief briefData={competitiveAudit} />

          <div className={styles.projectRepeatCardImage}>
            {size <= 768 ? (
              <img
                className={styles.projectImg}
                src={competitiveAuditMobile}
                alt='logo'
              />
            ) : (
              <img
                className={styles.projectImg}
                src={
                  light
                    ? competitiveAuditDesktopLight
                    : competitiveAuditDesktopDark
                }
                alt='logo'
              />
            )}
          </div>
        </div>

        {/* User Research Findings SECTION */}
        <div className={styles.projectRepeatCardCon}>
          <ProjectBackgroundTitle title={'User Research Findings'} />

          <ProjectBrief briefData={findings} />

          <div className={styles.projectRepeatCardImage}>
            {size <= 768 ? (
              <img
                className={styles.projectImg}
                src={findingMobile}
                alt='logo'
              />
            ) : (
              <img
                className={styles.projectImg}
                src={light ? findingDesktopLight : findingDesktopDark}
                alt='logo'
              />
            )}
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
                  src={understandingUserDesktopLight}
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
                  src={understandingUserDesktopLight}
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
            <img
              className={styles.projectImg}
              src={understandingUserDesktopLight}
              alt='logo'
            />
          </div>
        </div>

        {/* The Visuals SECTION */}
        <div className={styles.projectAuditCon}>
          <ProjectBackgroundTitle title={'The Visuals'} />

          <ProjectBrief briefData={visuals} />

          <div className={styles.projectAuditImage}>
            <img
              className={styles.projectImg}
              src={understandingUserDesktopLight}
              alt='logo'
            />
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

export function SolutionCard({ data }) {
  const { light } = useContext(ThemeContext)
  const brief = {
    title: data.title,
    briefs: [data.description],
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

SolutionCard.propTypes = {
  data: PropTypes.object.isRequired,
}
