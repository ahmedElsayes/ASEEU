import React from "react";
import Form from "./Form";

function Mainform() {
  const trigger = false;
  return (
    <div className="containerC">
      {trigger ? <Form Bname="Login" /> : <Form Bname="register" />}
    </div>
  );
}
export default Mainform;
