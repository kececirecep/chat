import './App.css'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Messages from './Pages/Messages/Messages';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/messages' element={<Messages/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
