//COMPONENTS
import Layout from '../../layout/Layout'
import ProjectHero from '../../components/ProjectHero'

//STYLES
import styles from './Reconnect.module.scss'
import project02 from '../../assets/Project/project02.svg'
import ProjectMain from '../../components/ProjectMain'

export default function Reconnect() {
  const heroData = {
    name: 'With-Me Reconnect',
    title:
      'Finding your friends around in real time. Meet on the map and create magic moments.',
    description:
      'with-me is an application for easy finding of friends within same proximity. Getting an extraordinary experince by connecting with loved ones in real time.',
    subtitle: 'Use this Figma prototype to see it in action',
    subDescription: 'Skip if you are not ready. There are nicer things ahead',
    img: project02,
    list: [
      { id: 'Role', listTitle: 'UX Designer' },
      { id: 'Duration', listTitle: '14 Days' },
      { id: 'Client', listTitle: 'Zuri' },
    ],
    link: '/',
  }
  return (
    <Layout title='With-Me Reconnects'>
      <div className={styles.reconnectContainer}>
        <ProjectHero data={heroData} />
        <ProjectMain />
      </div>
    </Layout>
  )
}
