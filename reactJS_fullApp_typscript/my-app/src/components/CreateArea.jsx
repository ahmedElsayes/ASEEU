import React, {useState} from "react";

function CreateArea(props) {
  const[note, setNote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event){
    console.log(event.target);
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="notes-editor">
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handlechange}/>
        <textarea name="content" placeholder="Take a note..." value={note.content} onChange={handlechange} rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
