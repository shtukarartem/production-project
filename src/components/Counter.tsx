import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const handleAdd = () => {
    setCount(count + 1)
  }
  return (
<>
<h1 className={classes.btn}>{count}</h1>
    <button onClick={handleAdd}>add</button>
</>
  )
}
