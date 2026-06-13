import React, { useState } from 'react'

const App = () => {

const [tittle, settittle] = useState('')
const [detail, setdetail] = useState('')
const [task, settask] = useState([])

const submitHandler = (e) => {
  e.preventDefault();
  
const copyTask = [...task];

copyTask.push({tittle,detail})

settask(copyTask)

  setdetail('')
  settittle('')
  
}

const deleteNote = (idx) => {
  const copyTask = [...task];

  copyTask.splice(idx,1)
  settask(copyTask)

  
}

  return (
    <div className='h-screen lg:flex'>
      <form className='flex p-10 items-start flex-col gap-5  font-medium lg:w-1/2' onSubmit={submitHandler}>

        <h1 className='text-4xl font-bold mb-4'>Add Notes</h1>

          <input 
         type="text" placeholder='Enter Notes Heading'
         className='px-5 py-3 w-full border-2 border-white rounded-md outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 '
         value={tittle}
         onChange={(e) =>{
          settittle(e.target.value)
         }}
         />

        <textarea 
         type="text" placeholder='write Details' id="details"
         className='px-5 py-1 w-full h-30 border-2 border-white rounded-md  outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600  '
         value={detail}
           onChange={(e) =>{
          setdetail(e.target.value)
         }}
        >
        </textarea>

        <button className='px-4 py-2  w-full   bg-white text-black rounded-md hover:text-white hover:bg-blue-600 active:bg-blue-400 '>Add Note</button>

      </form>

      <div className='py-10 px-10 h-screen lg:w-1/2 overflow-auto lg:border-l-2 '>

            <h1 className='text-4xl font-bold '>Recent Notes</h1>

      <div className='flex flex-wrap al gap-5 mt-6'>
      {task.map(function(elem,idx){
        return <div id='{idx}' className='leading-tight bg-cover bg-[url(https://img.magnific.com/free-vector/hand-painted-blue-watercolour-texture-background_1048-19185.jpg?semt=ais_hybrid&w=740&q=80)] relative pt-5 pb-4 px-4 text-black rounded-md h-54 w-45 p-3 flex flex-col justify-between items-start '> 
       
       < div className='flex flex-col gap-2'>
        <h1 className='text-lg font-bold'>{elem.tittle}</h1> <hr />
        <p className='text-sm'>{elem.detail}</p>
        </div>
       
        
         <button onClick={()=>{
             deleteNote(idx)
         }} className='w-full bg-red-600 text-white text-xs active:bg-red-900 '>delete note</button>
        </div>
      })}
        
      </div>
      </div>
    </div> 
  )
}

export default App