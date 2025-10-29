import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogIn/>   
    </>
  )
}

export default App
