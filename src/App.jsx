import { useState } from 'react'
import './App.css'
import AddCourse from './components/AddCourse'
import Search from './components/Search'
import Total from './components/Total'
import Course from './components/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-800'>
      <AddCourse />
      <Search/>
      <Course/>
      <Total/>
    </div>
    </>
  )
}

export default App
