import React from 'react';
import notes from "./constants/books.json";

const Notes = () => {
  return (
    <div className='p-10 text-white bg-[#1D212B]'>
      {notes.map((note, index) => (
        <div key={index}>
          <p className='text-2xl font-bold'>{note.notes.Heading}</p>
          <ul>
          {note.notes.notes.map((prevnote, i) => (
              <React.Fragment key={i}>
              <p>{prevnote}</p>
              <br />
            </React.Fragment>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Notes;
