import React from 'react';
import notes from "./constants/books.json";
import { Link } from 'react-router-dom';


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
      <div className="flex flex-row justify-between">
      <Link className='btnNext txtCol p-2' disabled>Prev</Link>
      <Link className='btnNext txtCol p-2'>Next</Link>
      </div>
    </div>
  );
}

export default Notes;
