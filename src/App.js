import './App.css';
import Detail from './Components/Detail';
import {Routes,Route} from "react-router-dom"
import Hero from './Components/Hero';
import Notes from './Components/Notes';
import TextToSpeech from './Components/textTospeechtest';

function App() {
  return (
      <Routes>
        <Route index element={<Hero/>}/>
        <Route path='/detail/rich_dad' element={<Detail/>}/>
        <Route path='/detail/rich_dad/notes' element={<Notes/>}/>
        <Route path='/speech' element={<TextToSpeech/>}/>
      </Routes>
  );
}

export default App;
