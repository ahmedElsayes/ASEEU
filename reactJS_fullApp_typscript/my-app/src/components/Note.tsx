import React from "react";

type PropsType = {
  key: number;
  id: number;
  title: string;
  content: string;
  onDelete: Function;
}

function Note(props: PropsType) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
