import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

export const Button = (props) => {
  const { 
    classNameArr,
    handleClick,
    handleClickArgs,
    animationClass,
    children, 
  } = props;

  const [inProp, setInProp] = useState(true);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={300} classNames={animationClass}>
      <div className={[...classNameArr]} onClick={() => handleClick(...handleClickArgs)}>
        {children}
      </div>
    </CSSTransition>
  )
}
