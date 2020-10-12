import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

type PropsType = {
  key: number;
  id: number;
  title: string;
  content: string;
  noteselect: string;
  onDelete: Function;
};

function Note(props: PropsType) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.noteselect}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
