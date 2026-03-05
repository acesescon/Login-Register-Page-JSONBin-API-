
import './index.css'
import {useState} from 'react'
import LandingPage from './pages/LandingPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  const [islogin, setIslogin] = useState(true)

  return (
    <>
      {islogin ? <LandingPage toggleLogin={() => setIslogin(false)} /> :
      <WelcomePage />
      }
    </>
  )
}

export default App
