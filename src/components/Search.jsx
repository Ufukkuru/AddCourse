import React from 'react'
import { changeSearchTerm } from '../Store/Slices/courseSlice'
import { useDispatch, useSelector } from 'react-redux'

function Search() {

  const dispatch = useDispatch()
  const searchTerm = useSelector((state)=>{
    return state.courses.searchTerm
  }) 
  return (
    <>
        <div className='flex relative mx-auto text-white mt-8'>
            <div className='absolute right-5'>
            <label className='mr-1'>Search: </label>
            <input type="text" value={searchTerm} onChange={(event)=>dispatch(changeSearchTerm(event.target.value))} placeholder='Plase search name' className='rounded-md h-8 text-black'/>
            </div>
        </div>
    </>
  )
}

export default Search