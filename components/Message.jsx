import React from 'react'

export default function MessageComment() {
  return (
    <div className='message text-justify text-gray-700 '>
        <form action="">
          <div >
          <textarea type="text" placeholder='Message ...'  />
          </div>
            <button className='rounded-md mt-3 absolute bottom-0 right-0' ><p>{">>"}</p></button>
        </form>
    </div>
  )
}
