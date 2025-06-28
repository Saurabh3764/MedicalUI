import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Body from './components/Body'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='m-2 p-2'>
        <Header/>
        <Body/>
    </div>
  )
}

export default App
