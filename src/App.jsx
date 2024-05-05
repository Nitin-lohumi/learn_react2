import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function change(){
    setCount(count=>count+1)
  }
  return (
    <>
      <h3>hlooo bhai {count}</h3>
      <button onClick={change}>click</button>
    </>
  )
}

export default App
