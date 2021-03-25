import React, { ChangeEvent, FC, useState } from "react";

type NewNoteInputProps = {
  addNote: (note: string) => void;
};

export const NewNoteInput: FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      ></input>
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};
