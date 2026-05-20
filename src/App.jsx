import { useState } from 'react'

import './App.css'
import Tooltip from './Tooltip/Tooltip'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tooltip/>
    </>
  )
}

export default App
