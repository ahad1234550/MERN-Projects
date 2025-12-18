import { useState } from 'react'
import './App.css'
import { Context } from './context/context'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Context.Provider value={{count, setCount}}>
        <Navbar />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            App.jsx: count is {count}
          </button>
        </div>
      </Context.Provider>
    </>
  )
}

export default App
