import React, {useState} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";


type propTypes = {
  onAdd: Function;
}
function CreateArea({ onAdd }: propTypes) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    noteselect: ""
  });

  function handlechange(event: any) {
    console.log(event.target);
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event: any) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
      noteselect: ""
    });
    event.preventDefault();
  }
  const [textSpace, setTextSpace] = useState(false);
  function expandText(){
    setTextSpace(true);
  }

  return (
    <div className="notes-editor">
      <form>
        {textSpace ? <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handlechange}
        /> : null}
        
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handlechange}
          onClick={expandText}
          rows= {textSpace ? 5 : 2}
        />
        <InputLabel id="demo-simple-select-label">Note type</InputLabel>
        <Select
          className="dropdownMenu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="noteselect"
          value={note.noteselect}
          onChange={handlechange}
        >
          <MenuItem value="Personal notes">Personal notes</MenuItem>
          <MenuItem value="Work notes">Work notes</MenuItem>
          <MenuItem value="Notes for another purpose">
            Another Purposes
          </MenuItem>
        </Select>
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
