import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [button, setButton] = useState(false);
  const [expand, setExpand] = useState(false);

  const Button = () => {
    if (button == true) {
      return <AiOutlineMinus className="icon"></AiOutlineMinus>;
    } else {
      return <AiOutlinePlus className="icon"></AiOutlinePlus>;
    }
  };

  const expandFunction = () => {
    setExpand(!expand);
    setButton(!button);
    console.log(expand);
  };

  return (
    <article class="question">
      <header>
        <h4>{title} </h4>
        <button className="btn" onClick={expandFunction}>
          <Button />
        </button>
      </header>
      {expand ? <p>{info}</p> : <p></p>}
    </article>
  );
};

export default SingleQuestion;
