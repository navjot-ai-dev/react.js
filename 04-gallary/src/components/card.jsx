import React from 'react'

const card = (props) => {
  
  return (
    <div>
        <a href={props.url} target='_blank' key={props.item.id}>
           <div key={props.item.id}
            className='w-60 h-60  bg-white rounded-lg shadow-lg overflow-hidden'>
            <img src={props.item.download_url} alt={props.item.author} className='w-full h-50 object-cover' />
            <div className='p-4 flex flex-col justify-center py-2 bg-cl'>
              <h3 className='text-lg  font-bold text-gray-800 '>
                {props.item.author}
                </h3>
            </div>
          </div>
          </a>
    </div>
  )
}

export default card