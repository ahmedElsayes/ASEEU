import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

type NoteType = {
  title: string;
  content: string;
}

function Notepage() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote: NoteType) {
    setNotes((prevNotes: NoteType[]): any => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevNotes: NoteType[]): any => {
      return prevNotes.filter((noteItem: NoteType, index: number) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem: any, index: number) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Notepage;
