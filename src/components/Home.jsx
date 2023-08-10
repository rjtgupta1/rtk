import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/slices/counterSlice'

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button name='increment' onClick={()=> dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button name='decrement' onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Home