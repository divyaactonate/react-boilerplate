import { useState } from 'react'
import './counters.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='flex app p-6 justify-center items-center'>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button
        className='p-1 text-black ml-4 rounded-lg bg-gray-400'
        onClick={() => setCount((c) => c + 1)}
      >
        Count - {count}
      </button>
    </div>
  )
}
