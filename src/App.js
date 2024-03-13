import './App.css'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Messages from './Pages/Messages/Messages';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import FriendsList from './Pages/FriendsList';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/friends-list' element={<FriendsList/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
