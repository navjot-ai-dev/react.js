import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'

const App = () => {
  
const [data, setdata] = useState([])
const [Index, setIndex] = useState(1)

  const getData = async () => {
   
      const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=10`)
      setdata(response.data)
    
  }

  useEffect(function(){
    getData()
  },[Index])

let printData = <h2 className='text-2xl text-white font-semibold mt-15 absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>...Loading</h2>
    if (data.length > 0) {
      printData = data.map((item) => {
        return (
          <Card item={item} key={item.id} />

        )
      })
    }
 
  

  return (
    <div className='h-screen flex p-3 flex-col overflow-auto bg-linear-to-r from-blue-900 to-pink-900'>
         <h2 className='h-8 w-8 font-bold bg-white flex justify-center items-center rounded-2xl'>{Index}</h2>
         
         <div className='flex flex-wrap gap-4 justify-center '>
           {printData}
         </div>
         <div className='flex justify-center items-center gap-6 absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

          <button 
          style={{opacity: Index==1?0.5 : 1}}
          className='bg-white rounded-xl text-black px-4 py-2 font-semibold'
          onClick={() =>{
           if(Index > 1){
            setIndex(Index-1)
            setdata([])
           }
            
          }}>
            prev
            </button>

          <button className='bg-white  rounded-xl text-black px-4 py-2 font-semibold'
              onClick={() =>{
            if (Index<10) {
               setIndex(Index+1)
               setdata([])
            }
  
          }}>
            next
            </button>
          
         </div>

    </div>
  )
}

export default App
