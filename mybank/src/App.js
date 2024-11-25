import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Registerr';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Transactions from './Components/Transactions';
import Users from './Components/Users';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/nav' element={<Nav />}></Route>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/transactions' element={<Transactions />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/profile' element={<Profile />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
