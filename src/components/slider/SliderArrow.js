import { useTransition, animated } from 'react-spring';

export const SliderArrow = props => {
  const { show, direction, handleClick } = props;

  const transitionArrow = useTransition(show, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {
      clamp: true,
    }
  });

  return (
    <>
      {transitionArrow((style, item) => 
        item && 
        <animated.div 
          style={style}
          className={`arrow arrow-${direction === '<' ? 'left' : 'right'}`}
          onClick={() => handleClick()}
        >
          {direction}
        </animated.div>
      )}
    </>
  )
}
