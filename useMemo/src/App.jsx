import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'
import { useEffect } from 'react'

function App() {
  const nums = useMemo(() => new Array(30000000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === 29000000
    }
  }), [])
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  useEffect(() => {
    if (count % 5 == 0 && count !==0) {
      setNumbers(prev =>
        prev.map(item =>
          item.isMagical
            ? { ...item, isMagical: false }
            : item
        )
      )
    }
  }, [count])

  const magical = useMemo(() => {
    console.log('finding magical...');
    return numbers.find(item => item.isMagical);
  }, [numbers])

  return (
    <>

      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>
          count is {count}
        </button>

        <p>Magical index: {magical?.index ?? 'none'}</p>
      </div>
    </>
  )
}

export default App
