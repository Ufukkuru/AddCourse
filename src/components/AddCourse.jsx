import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCost, changeDescription, changeName } from '../Store/Slices/formSlice'
import { addCourses } from '../Store/Slices/courseSlice'

function AddCourse() {

    const dispatch = useDispatch()

    const {name, description, cost} = useSelector((state)=>{
        return{
            name: state.form.name,
            description : state.form.description,
            cost : state.form.cost
        }
    })

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(addCourses({name,description,cost}))
    }

  return (
    <>
        <div className='mt-10 shadow-xl relative text-white '>
            <div>
                <h1 className='left-16 text-4xl relative top-2'>Add Course</h1>
            </div>
            <div className='flex relative mt-7'>
                <form onSubmit={handleSubmit}>
              <div className='flex relative'>
                  <div className='left-14 relative'>
                      <label>Name: </label>
                      <input value={name} required onChange={(event)=>dispatch(changeName(event.target.value))} type="text" className='w-56 border-2 h-8 rounded-lg text-black border-gray-800' placeholder='Plase Enter Name' />
                  </div>
                  <div className='left-20 relative'>
                      <label>Description: </label>
                      <input value={description} required onChange={(event)=>dispatch(changeDescription(event.target.value))}  type="text" className='w-56 border-2 h-8  rounded-lg text-black border-gray-800' placeholder='Plase Enter Description' />
                  </div>
                  <div className='left-24 relative'>
                      <label>Price: </label>
                      <input value={cost} required onChange={(event)=>dispatch(changeCost(event.target.value))}  type="number" className='w-56 border-2 h-8  rounded-lg text-black border-gray-800' placeholder='Plase Enter Price' />
                  </div>
              </div>
              <div className='flex relative left-96'>
                  <button className='absolute right-3 duration-300 bg-gradient-to-r from-fuchsia-500 from-20% via-indigo-900 via-70% to-sky-900 to-100% hover:bg-gradient-to-r hover:from-sky-900 hover:from-20% hover:via-fuchsia-500 hover:via-70% hover:to-indigo-900  hover:to-100% border-2 hover:scale-105 transition-all ease-linear rounded-lg w-48 h-8 bottom-0  '>
                      Add Course
                    </button>
              </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default AddCourse