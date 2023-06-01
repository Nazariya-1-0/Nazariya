import './App.css';
import Detail from './Components/Detail';
import {Routes,Route} from "react-router-dom"
import Hero from './Components/Hero';

function App() {
  return (
      <Routes>
        <Route index element={<Hero/>}/>
        <Route path='/detail/the_tiny_dragon' element={<Detail/>}/>
      </Routes>
  );
}

export default App;
