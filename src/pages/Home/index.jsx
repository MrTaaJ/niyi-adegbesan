//REACT DEFAULT
import { useEffect, useState } from 'react'

//components
import Intro from '../Intro'
import Layout from '../../layout/Layout'

function Home() {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(false)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      {display ? (
        <Intro />
      ) : (
        <Layout>
          <h1>Welcome My Guy</h1>
        </Layout>
      )}
    </div>
  )
}

export default Home
