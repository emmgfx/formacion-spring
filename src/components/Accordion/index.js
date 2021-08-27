import React, { useState } from "react";
import { useKey } from "react-use";

import Item from "./Item";
import Header from "./Header";
import Body from "./Body";

const Accordion = ({ children }) => {

  const [openTab, setOpenTab] = useState(0);

  const increment = () => setOpenTab(openTab => {
    const max = React.Children.toArray(children).length;
    return (openTab < max - 1) ? openTab + 1 : openTab;
  });

  const decrement = () => setOpenTab(openTab => {
    return (openTab > 0) ? openTab - 1 : openTab;
  });

  useKey('ArrowDown', increment);
  useKey('ArrowUp', decrement);

  return (
    <div className="accordion">
      {
        React.Children.toArray(children).map((node, index) => {
          // Filter out non-accordion items (optional)
          // if(node.type.name !== Item.name) return null;
          return React.cloneElement(node, {
            index,
            open: openTab === index,
            setOpenTab,
          })
        })
      }
    </div>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;