import React, {useState} from "react";

type propTypes = {
  onAdd: Function;
}
function CreateArea({ onAdd }: propTypes) {
  const [note, setNote] = useState({
    title: "",
    content: "",
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
    });
    event.preventDefault();
  }

  return (
    <div className="notes-editor">
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handlechange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handlechange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
