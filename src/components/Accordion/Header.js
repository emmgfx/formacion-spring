import { useSpring, animated } from "@react-spring/web";

const AccordionHeader = ({ children, setOpenTab, open, index }) => {

  const stylesHeader = useSpring({
    backgroundColor: open ? '#fa4b9f' : '#ffcde5',
    color: open ? 'white' : 'black',
  });

  const stylesCaret = useSpring({
    config: { friction: 5 },
    transform: open ? 'rotate(-180deg)' : 'rotate(-90deg)',
    fontWeight: 'bold',
  });

  return (
    <animated.div style={stylesHeader} className="accordion-header" onClick={() => setOpenTab(index)}>
      <span>
        { children }
      </span>
      <animated.span style={stylesCaret}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10V15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.75 11.25L12 9L14.25 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </animated.span>
    </animated.div>
  )
}

export default AccordionHeader;