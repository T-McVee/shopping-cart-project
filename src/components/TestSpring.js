import React, { useState } from 'react'
import { useSpring, useTransition, animated, config } from 'react-spring'


export const TestSpring = () => {
  
  const [show, setShow] = useState(true)

  const transition = useTransition(show, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  })

  return (   
    <>
    <div onClick={() => setShow(true)}>Click This</div>
    <div onClick={() => setShow(false)}>Click This</div>
    {transition((style, item) => 
    item && <animated.div style={style}>Doode</animated.div>)}
    
    </>
  )
}
  

  /* <>
    <div onClick={() => setIndex(index + 1)}>Click Me</div>
    <div onClick={() => setIndex(index - 1)}>Click Me</div>
    <animated.div style={fade} className="test">I will fade in</animated.div>
  </> */




