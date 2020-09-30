import React, { useState }from "react";
import Input from "./Input";

interface typeProps {
  Bname: string;
}

function Form(props: typeProps) {
  const [buttcolor, setbuttcolor] = useState(false);

  function mousein() {
    //console.log("mouse over button");
    setbuttcolor(true);
  }
  function mouseout() {
    //console.log("mouse out button");
    setbuttcolor(false);
  }

  return (
    <form className="logging-form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.Bname === "register" && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button
        onMouseOver={mousein}
        type="submit"
        onMouseOut={mouseout}
        style={{ backgroundColor: buttcolor ? "black" : "white" }}
      >
        {props.Bname}
      </button>
    </form>
  );
}
export default Form;
