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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  return (

    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>

          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/nav' element={<Nav />}></Route>

          <Route path='/home' element={<Home />}></Route>
          <Route path='/transactions' element={<Transactions />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/profile' element={<Profile />}></Route>

        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
