import React, { useState, useEffect } from 'react';
import notes from "./constants/books.json";
import { useSpeechSynthesis } from 'react-speech-kit';
import rich_dad from "./assets/images/rich_dad_poor_dad.jpeg"
import { Link } from 'react-router-dom';
const Notes = () => {
  const [value, setValue] = useState('');
  const { speak,cancel,voices} = useSpeechSynthesis();
  const speechSynthesisVoice={
      default: true,
      lang: "en-AU",
      localService: true,
      name: "Karen",
      voiceURI: "Karen",
    }
  
  const [speaking,setspeaking]=useState(false)

  useEffect(() => {
    let accumulatedValue = '';
    notes.forEach((note) => {
        accumulatedValue += " Heading for "
      accumulatedValue += note.notes.Heading;
      accumulatedValue += "\n Now coming on to the notes \n"
      note.notes.notes.forEach((prevnote) => {
        accumulatedValue += prevnote;
      });
    });
    setValue(accumulatedValue);
  }, []);

  return (
    <>
    <div className='p-10 text-white bg-[#1D212B]'>
    <div className="flex row justify-between my-4 opacity-100 items-center w-[80vw]">
            <Link to="/detail/rich_dad">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" className='icons' />
              </svg>
            </Link>
            <p className=' txtCol text-center'>Rich Dad Poor Dad Notes</p>
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='icons' viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </Link>
          </div>
    <div className="book w-[100%] flex justify-center mb-5 flex-col items-center">
      <img src={rich_dad} alt="" className=' w-52 rounded-lg'/>
      <p className=' font-serif mt-3 text-3xl'>Rich Dad Poor Dad</p>
      <p className=' mt-3 text-xl'>Robert Kiyosaki</p>
    </div>
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

      <div className="bottomplaypause w-[100%] self-center fixed h-14 bottom-0 flex justify-between rounded-lg px-5 gap-4">
        <button onClick={() => { 
        if(!speaking)
        {
            speak({ text:value, voice:voices[2] }) 
            setspeaking(!speaking)
          }
          else{
            cancel();
            setspeaking(!speaking)
        }
        }} className='text-white bg-[chocolate] font-bold flex justify-center text-center w-[100%] items-center rounded-md'>Speak/Pause</button>
    </div>
      </div>
      </>
  );
}

export default Notes;
