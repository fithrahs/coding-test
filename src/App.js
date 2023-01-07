import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Add from './pages/Add';
import Delete from './pages/Delete';
import Home from './pages/Home';

function App() {
  return (
    <div className='App' style={{backgroundColor: 'green', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/add" element={<Add />} />
        </Routes>
        <Routes>
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
