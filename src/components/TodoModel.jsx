import React, { useState } from "react";

const TodoModel = ({isModelOpen,setIsModelOpen}) => {
    const [title,setTitle]=useState();
    const [status,setStatus]=useState();
    const handelModelClose=()=>{
        setIsModelOpen(false)
    }
    const handelSubmit =(e)=>{
e.preventDefault();
console.log(title,status)

    }
  return (
    isModelOpen&&(
    <>
      <div className="bg-gray-300 bg-opacity-70 w-full h-screen fixed top-0 left-0 flex">
        <div className=" bg-gray-100 p-4 w-4/12 m-auto relative ">
          <p className="title text-start text-xl font-bold">Add Todo</p>
          <form className="form-wrap" onSubmit={(e)=>{
            handelSubmit(e)
          }}>
            <div className="title">
              <p className="title text-left py-2 text-lg">Title</p>
              <input type="text" id="title" className="w-full py-2 px-2" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="satus">
              <p className="title text-left py-2 text-lg">Status</p>
              <select id="setStatus" className="w-full py-2 px-2" defaultValue={status} onChange={(e)=>setStatus(e.target.value)}>
                <option className="px-2 py-1 mb-2" selected defaultValue="all">
                  All
                </option>
                <option className="px-2 py-1 mb-2" defaultValue="Incmplt">
                  Complete
                </option>
                <option className="px-2 py-1 mb-2" defaultValue="cmplt">
                  InComplete
                </option>
              </select>
            </div>
            <div className="btn-wrap mt-4">
                <button type="submit" className=" bg-green-400 px-4 py-1 text-white">Submit</button>
            </div>
          </form>
          <button className="close-btn absolute -top-12 right-0 text-lg bg-white p-1 rounded-md" onClick={handelModelClose}>
            ❌
          </button>
        </div>
      </div>
    </>
    )
  );
};

export default TodoModel;
