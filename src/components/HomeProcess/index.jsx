//REACT DEFAULT
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

//COMPONENTS
import Container from '../../layout/Container'
import { Title } from '../HomeProjects'
import { AnimationCircle } from '../HomeHero'

//STYLES
import styles from './HomeProcess.module.scss'
import { ReactComponent as BrainBot } from '../../assets/Process/brainBot.svg'
import {
  isqoreDark,
  isqoreLight,
  radicalDark,
  radicalLight,
  vendyDark,
  vendyLight,
  paysmosmo,
  zuri,
} from '../../assets/Client'

function HomeProcess() {
  const { light } = useContext(ThemeContext)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    if (toggle === false) {
      setTimeout(() => {
        setToggle(true)
      }, 3000)
    } else {
      setTimeout(() => {
        setToggle(false)
      }, 18000)
    }
  }, [toggle])

  return (
    <Container>
      <div className={styles.processContainer}>
        <div className={styles.animateCircle}>
          <AnimationCircle />
        </div>

        <Title smallTitle='My Design Process' title='My Process' />

        <div className={`${styles.designProcess}`}>
          <div
            className={`${styles.processBrain} ${
              light ? styles.brainLight : styles.brainDark
            } ${toggle ? styles.activeCon : ''}`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 48 48'
              fill='none'
            >
              <g opacity='0.5'>
                <mask
                  id='mask0_5001_8509'
                  maskUnits='userSpaceOnUse'
                  x='1'
                  y='1'
                  width='46'
                  height='46'
                >
                  <path
                    d='M28.964 44C29.944 40.805 31.422 38.422 33.399 36.853C36.364 34.5 41.075 35.963 42.815 33.535C44.555 31.107 41.596 26.643 40.558 24.009C39.519 21.375 44.538 20.444 43.952 19.696C43.562 19.197 41.025 17.759 36.343 15.38C35.013 7.794 30.1 4 21.602 4C8.85599 4 3.99999 14.806 3.99999 21.68C3.99999 28.552 9.87999 35.956 18.256 37.553C19.005 38.643 17.925 40.793 15.016 44'
                    stroke='white'
                    strokeWidth='4.667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M28.4999 14.4999C29.1539 17.0339 28.9599 18.8139 27.9169 19.8389C26.8749 20.8629 25.0989 21.5339 22.5889 21.8489C23.1589 25.1179 22.4639 26.6509 20.5059 26.4489C18.5479 26.2479 17.3709 25.4339 16.9759 24.0089C13.9159 24.8689 12.2569 24.1489 11.9999 21.8489C11.6149 18.3989 13.4749 15.6479 14.2379 15.6479C14.9999 15.6479 16.9759 15.5549 16.9759 14.4999C16.9759 13.4449 19.2839 12.8499 21.3669 12.8499C23.4499 12.8499 22.1969 11.4449 25.0569 11.9999C26.9639 12.3699 28.1119 13.2029 28.4999 14.4999Z'
                    fill='#555555'
                    stroke='white'
                    strokeWidth='4'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.4999 25.5C18.5169 26.131 19.9119 27.18 20.4999 28C21.9689 30.05 23.1599 31.298 23.4199 32.608'
                    stroke='white'
                    strokeWidth='4'
                    strokeLinecap='round'
                  />
                </mask>
                <g mask='url(#mask0_5001_8509)'>
                  <path d='M48 0H0V48H48V0Z' fill='#535353' />
                </g>
              </g>
            </svg>

            <div className={styles.ideaListsContainer}>
              <div
                className={`${styles.ideaLists} ${toggle ? styles.active : ''}`}
              >
                <div className={styles.ideaDotOuter}>
                  <div className={styles.ideaDot}></div>
                </div>
                <div className={styles.ideaList}>
                  <p>RESEARCH</p>
                  <div className={styles.ideaSmallDot}></div>
                  <p>Finding out about the user and product</p>
                </div>
              </div>

              <div
                className={`${styles.ideaLists} ${toggle ? styles.active : ''}`}
              >
                <div className={styles.ideaDotOuter}>
                  <div className={styles.ideaDot}></div>
                </div>
                <div className={styles.ideaList}>
                  <p>IDEATE</p>
                  <div className={styles.ideaSmallDot}></div>
                  <p>Conceptualizing a solution for the problem</p>
                </div>
              </div>

              <div
                className={`${styles.ideaLists} ${toggle ? styles.active : ''}`}
              >
                <div className={styles.ideaDotOuter}>
                  <div className={styles.ideaDot}></div>
                </div>
                <div className={styles.ideaList}>
                  <p>WIREFRAME</p>
                  <div className={styles.ideaSmallDot}></div>
                  <p>Graphical representation of solution</p>
                </div>
              </div>

              <div
                className={`${styles.ideaLists} ${toggle ? styles.active : ''}`}
              >
                <div className={styles.ideaDotOuter}>
                  <div className={styles.ideaDot}></div>
                </div>
                <div className={styles.ideaList}>
                  <p>PROTOTYPE</p>
                  <div className={styles.ideaSmallDot}></div>
                  <p>Creating visuals for design solution</p>
                </div>
              </div>

              <div
                className={`${styles.ideaLists} ${toggle ? styles.active : ''}`}
              >
                <div className={styles.ideaDotOuter}>
                  <div className={styles.ideaDot}></div>
                </div>
                <div className={styles.ideaList}>
                  <p>TEST</p>
                  <div className={styles.ideaSmallDot}></div>
                  <p>Test usability of product and iterations</p>
                </div>
              </div>
            </div>

            <div className={styles.brainBot}>
              <BrainBot />
            </div>

            <div className={styles.ideaStick}></div>
          </div>

          <div className={styles.animateCircleTwo}>
            <AnimationCircle />
          </div>
        </div>
      </div>

      <HomeClient />
    </Container>
  )
}

export default HomeProcess

const HomeClient = () => {
  const { light } = useContext(ThemeContext)
  const clients = [
    {
      name: 'radicalX',
      imgLight: radicalLight,
      imgDark: radicalDark,
    },
    {
      name: 'paysmosmo',
      imgLight: paysmosmo,
      imgDark: paysmosmo,
    },
    {
      name: 'zuri',
      imgLight: zuri,
      imgDark: zuri,
    },
    {
      name: 'isqore',
      imgLight: isqoreLight,
      imgDark: isqoreDark,
    },
    {
      name: 'vendy',
      imgLight: vendyLight,
      imgDark: vendyDark,
    },
  ]
  return (
    <div className={styles.clientContainer}>
      <Title smallTitle='Some of my Clients' title='My Clients' />

      <div className={styles.clients}>
        {clients.map((data, index) => (
          <div key={index} className={styles.client}>
            <img src={light ? data.imgLight : data.imgDark} alt={data.name} />
          </div>
        ))}
      </div>
    </div>
  )
}
