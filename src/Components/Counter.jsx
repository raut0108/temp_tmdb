import React from 'react'
import { useSelector, useDispatch } from 'react-redux'   
import { increment,decrement } from '../redux/counterSlice'

function Counter() {

   const count = useSelector(state=>state.counter.value)
   const dispatch = useDispatch()

    return (
    <div>
        <h1 className='px-8 mx-8'>Count : {count}</h1>
        <button className='p-3 m-3 border border-black-600' onClick={()=>dispatch(increment())}> increment </button>
        <button className='p-3 m-3 border border-black-600' onClick={()=>dispatch(decrement())}> decrement </button>
    </div>
  )
}

export default Counter
