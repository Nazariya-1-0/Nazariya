import './App.css';
import Detail from './Components/Detail';
import {Routes,Route} from "react-router-dom"
import Hero from './Components/Hero';
import PdfViewer from './Components/PdfViewver';

function App() {
  return (
      <Routes>
        <Route index element={<Hero/>}/>
        <Route path='/detail/rich_dad' element={<Detail/>}/>
        <Route path='/pdf' element={<PdfViewer/>}/>
      </Routes>
  );
}

export default App;
