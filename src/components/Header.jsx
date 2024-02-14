import React, { useState } from 'react'
import TodoModel from './TodoModel'

const Header = () => {
  const [isModelOpen,setIsModelOpen]=useState(false);
  const handelModel=()=>{
    setIsModelOpen(true)
  }
  return (
    <>
    <div className='flex mt-8 justify-between'>
      <div className="brn-wrap">
        <button className='bg-violet-700 px-4 py-1 text-xl rounded-md text-white font-semibold' onClick={handelModel}>Add Task</button>
      </div>
      <div className="select-wrap">
        <select  id="status" className='border-2 border-gray-300 py-1 px-4 rounded-md'>
          <option selected defaultValue="All">All</option>
          <option defaultValue="Complete">Completed</option>
          <option defaultValue="In Complete">In Completed</option>
        </select>
      </div>
    </div>
    <TodoModel isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}/>
    </>
  )
}

export default Header
