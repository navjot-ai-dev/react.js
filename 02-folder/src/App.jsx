import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Tittle, setTittle] = useState('')
  const submit = (e) =>{
    e.preventDefault()
    console.log('form submitted by',Tittle)
    setTittle('')
  }

  return (
    <div>
     <form onSubmit={submit}>
     <input type="text" placeholder='enter name' value={Tittle} onChange={(c)=> {
       setTittle(c.target.value)
       
     }}
     className='m-2 p-2  '/>
     <br />
     <input type="password" placeholder='enter password'className='m-2 p-2'/>
     <br />
     <button className='m-2 p-1 bg-amber-700'>submit</button>
     </form>
    </div>
  )
}

export default App
