import { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleMode() {
      setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
      <Navbar darkMode={darkMode} darkModeHandler={toggleMode}/>
      <Main darkMode={darkMode} />
    </>
  )
}
