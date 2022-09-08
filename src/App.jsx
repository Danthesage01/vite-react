import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="section-center">
      <h1>Counter</h1>
      <div className='count'>{count}</div>
      <div className='btn-container'>
        <button className='btn btn-dec' onClick={() => setCount(prevCount => prevCount - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={() => setCount(0)}>
        Reset
        </button>
        <button className='btn btn-inc' onClick={() => setCount(prevCount => prevCount + 1)}>
        Increase
        </button>
      </div>
    </section>
  )
}

export default App
