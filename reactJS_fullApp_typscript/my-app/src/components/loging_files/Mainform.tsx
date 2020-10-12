import React, {useState} from "react";
import Form from "./Form";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

function Mainform() {
  const [userState, setUserState] = useState(false);
  const [userName, setUserName] = useState("")
  function handleChange(event: any){
    const userstatus = event.target.value;
    userstatus==="login" ? setUserState(true):setUserState(false);
    setUserName(userstatus);
  }
  // const trigger: boolean = false;
  return (
    <div>
      <div className="dropdownMenu_loginPage">
        <InputLabel id="demo-simple-select-label">Note type</InputLabel>
        <Select
          className="dropdownMenu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="noteselect"
          value={userName}
          onChange={handleChange}
        >
          <MenuItem value="login">login</MenuItem>
          <MenuItem value="register">register</MenuItem>
        </Select>
      </div>
      <div className="containerC">
        {userState ? <Form Bname="Login" /> : <Form Bname="register" />}
      </div>
    </div>
  );
}
export default Mainform;
