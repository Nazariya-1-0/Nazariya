import React, { useState, useEffect } from 'react';
import notes from "./constants/books.json";
import { useSpeechSynthesis } from 'react-speech-kit';

const Notes = () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    let accumulatedValue = '';
    notes.forEach((note) => {
        accumulatedValue += " Heading for "
      accumulatedValue += note.notes.Heading;
      accumulatedValue += " Now coming on to the notes                                                                             "
      note.notes.notes.forEach((prevnote) => {
        accumulatedValue += prevnote;
      });
    });
    setValue(accumulatedValue);
  }, []);

  return (
    <>
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
    <div className='flex w-[100%] justify-center items-center'>

      <div className="bottomplaypause w-[80%] self-center bg-[#fdfdfd] fixed h-14 bottom-0 flex rounded-lg">
        <button onClick={() => { speak({ text:value }) }} className='text-black font-bold flex justify-center text-center w-[100%] items-center rounded-md'>Speak</button>
    </div>
      </div>
      </>
  );
}

export default Notes;
