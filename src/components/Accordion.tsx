import React from "react";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  data: {
    title: string;
    text: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
};

export default Accordion;
