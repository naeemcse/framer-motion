import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simple from "./components/Simple.jsx";
import Keyframe from "./components/Keyframe.jsx";
import Button from "./components/Button.jsx";
import Text from "./components/Text.jsx";
import TransitionType from "./components/TransitionType.jsx";
import Counter from "./components/Counter.jsx";
import ScrollReveal from "./components/ScrollReveal.jsx";
import ScrollSign from "./components/ScrollSign.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <ScrollSign/>
        <Simple/>
          <Keyframe/>
          <Button/>
          <Text/>
          <TransitionType/>
          <Counter/>
          <ScrollReveal/>
      </>
  )
}

export default App
