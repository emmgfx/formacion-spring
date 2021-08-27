import React from "react";

// Required only for filtering out non-accordion items
import Header from "./Header";
import Body from "./Body";

const AccordionItem = ({ children, open, index, setOpenTab }) => {
  return (
    <div className="accordion-item">
      {
        React.Children.map(children, child => {
          // Filter out non-accordion items (optional)
          if(![Header.name, Body.name].includes(child.type.name)) return null;
          return React.cloneElement(child, { open, index, setOpenTab });
        })
      }
    </div>
  );
}

export default AccordionItem;