// React Default
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

//components
import Intro from './pages/Intro'
import Home from './pages/Home'

function App() {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(false)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      {display ? (
        <Intro />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
