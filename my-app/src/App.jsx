import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simple from "./components/Simple.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Simple/>
      </>
  )
}

export default App
