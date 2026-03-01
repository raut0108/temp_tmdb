import React from 'react'

function PginationComponent(props) {
    const {handlePrev,handleNext,pageNo} = props
  return (
    <div>
      <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2 items-center'>
         <div onClick={handlePrev} className='px-8 py-2 hover:cursor-pointer hover:bg-blue-600 rounded'> 
            <i className='fa-solid fa-arrow-left'></i>  Previous
         </div>
         <div>{pageNo}</div>
         <div onClick={handleNext} className='px-8 py-2 hover:cursor-pointer hover:bg-blue-600 rounded'> 
            Next  <i className='fa-solid fa-arrow-right' ></i> 
         </div>
         </div>
    </div>
  )
}

export default PginationComponent;