import React from "react";
interface typeProps {
  type: string;
  placeholder: string;
}

function Input(props: typeProps) {
  return <input type={props.type} placeholder={props.placeholder} />;
}
export default Input;