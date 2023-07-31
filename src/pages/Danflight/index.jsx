//COMPONENTS
import Layout from '../../layout/Layout'
import ProjectHero from '../../components/ProjectHero'
import DanflightMain from '../../components/DanflightMain'

//STYLES
import styles from './Danflight.module.scss'
import project03 from '../../assets/Project/project03.svg'

export default function Reconnect() {
  const heroData = {
    name: 'Danflight Rider',
    title: 'An easy way to book, manage  and track your rides.',
    description:
      'Danflite presence platform makes it possible to connects corporate workers with drivers to book ride in time with ease. It provide access with consistent information about trip information.',
    subtitle: 'Use this Figma prototype to see it in action',
    subDescription: 'Skip if you are not ready. There are nicer things ahead',
    img: project03,
    list: [
      { id: 'Role', listTitle: 'UX Designer' },
      { id: 'Duration', listTitle: '14 Days' },
      { id: 'Client', listTitle: 'Techhack' },
    ],
    link: '/',
  }
  return (
    <Layout title='With-Me Reconnects'>
      <div className={styles.danFlightContainer}>
        <ProjectHero data={heroData} />
        <DanflightMain />
      </div>
    </Layout>
  )
}
