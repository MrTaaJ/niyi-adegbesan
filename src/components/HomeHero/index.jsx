//REACT DEFAULT
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

//COMPONENTS
import Container from '../../layout/Container'

//STYLES
import styles from './HomeHero.module.scss'
import Avatar from '../../assets/Hero/avatar.svg'
import aiIcon from '../../assets/Hero/aiIcon.svg'
import figmaIcon from '../../assets/Hero/figmaIcon.svg'
import framerIcon from '../../assets/Hero/framerIcon.svg'
import miroIcon from '../../assets/Hero/miroIcon.svg'
import psIcon from '../../assets/Hero/psIcon.svg'
import webflowIcon from '../../assets/Hero/webflowIcon.svg'
import sendIcon from '../../assets/Hero/sendIcon.svg'
import rotatingArrow from '../../assets/Hero/rotatingArrow.svg'

function HomeHero() {
  const { light } = useContext(ThemeContext)

  const talentIcons = [
    figmaIcon,
    miroIcon,
    psIcon,
    aiIcon,
    webflowIcon,
    framerIcon,
  ]

  const circleTexts = 'How I made the magic you called design'.split('')

  return (
    <Container>
      <div className={styles.homeHeroContainer}>
        <div
          className={`${styles.avatarContainer} ${
            light ? styles.light : styles.dark
          }`}
        >
          <img className={styles.avatar} src={Avatar} alt='avatar' />
        </div>

        <div className={styles.homeHeroTop}>
          <h1 className={styles.homeHeroIntro}>Hey, I’m Olaniyi</h1>

          <div className={styles.talentIconContainer}>
            {talentIcons.map((icon, index) => (
              <img
                key={index}
                className={styles.avatar}
                src={icon}
                alt='talentIcon'
              />
            ))}
          </div>

          <p
            className={`${styles.homeHeroDescription} ${
              light ? styles.lightText : styles.darkTest
            }`}
          >
            Product designer based in Lagos, Nigeria. Currently designing
            enterprise & e-commerce software at Paysmosmo, Nigeria.
          </p>

          <Link to={'/about'} className={styles.myStory}>
            <p>My Story</p>
            <img className={styles.avatar} src={sendIcon} alt='myStory' />
          </Link>

          <div className={styles.myPassionContainer}>
            <div className={styles.myPassion}>
              <div className={styles.myPassionInner}>
                <div>
                  <p>My Passion My Passion My Passion</p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.myPassionOuter} ${
                light ? styles.lightText : styles.darkTest
              }`}
            >
              <p>I am passionate about </p>
              <div className={styles.myPassionAnimateCon}>
                <p className={styles.myPassionAnimate}>UI design</p>
                <p className={styles.myPassionAnimate}>UX design</p>
                <p className={styles.myPassionAnimate}>Interaction design</p>
                <p className={styles.myPassionAnimate}>No Code Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.circle}>
          <div className={styles.circleLogo}>
            <div className={styles.circleLogoInner}>
              <img
                className={styles.rotatingArrow}
                src={rotatingArrow}
                alt='rotatingArrow'
              />
              <div className={styles.blink}></div>
            </div>
          </div>
          <div className={`${styles.circleText}`}>
            {circleTexts.map((text, index) => (
              <span
                style={{ transform: `rotate(${index * 9.3}deg)` }}
                key={index}
                className={styles.circleInnerText}
              >
                {text}
              </span>
            ))}
            <p></p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HomeHero
