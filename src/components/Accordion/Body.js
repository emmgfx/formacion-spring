import React, { useState, useEffect } from "react";
import { useMeasure } from "react-use";
import { useSpring, animated } from "@react-spring/web";

const AccordionBody = ({ children, open }) => {

  const [contentHeight, setContentHeight] = useState(0);

  const [ref, { height }] = useMeasure();

  useEffect(() => {
    setContentHeight(height);
    window.addEventListener("resize", setContentHeight(height));
    return window.removeEventListener("resize", setContentHeight(height));
  }, [height]);

  const styles = useSpring({
    height: open ? `${contentHeight}px` : '0px',
    backgroundColor: open ? '#ff83c5' : '#ececec',
  });

  return (
    <animated.div style={styles} className="accordion-body">
      <div ref={ref} className="accordion-body-inner">
        <div>
          { children }
        </div>
      </div>
    </animated.div>
  )
}

export default AccordionBody;