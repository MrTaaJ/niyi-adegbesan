// React Default
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
