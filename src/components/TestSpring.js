import React, { useState } from 'react'
import { useSpring, useTransition, animated, config } from 'react-spring'


export const TestSpring = () => {
  
  const [index, setIndex] = useState(false)

  const fade = useSpring({
    transform: `translateX(${index * 20}vw)`, 
    backgroundColor: '#e3e3e3', 
    config: {
      mass: 50, 
      tension: 90, 
      friction: 120
    }
  })


  return (
    <>
    <div onClick={() => setIndex(index + 1)}>Click Me</div>
    <div onClick={() => setIndex(index - 1)}>Click Me</div>
    <animated.div style={fade} className="test">I will fade in</animated.div>
    </>
  )
  
  


/* const [show, setShow] = useState(false)
const transitions = useTransition(show, null, {
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
})

return transitions.map(({ item, key, props }) =>
item && <animated.div key={key} style={props}>✌️</animated.div>
) */

}


