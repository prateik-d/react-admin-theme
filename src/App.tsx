import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import UsersList from './Pages/Users/UsersList';
import AddUser from './Pages/Users/AddUser';
import UserRoles from './Pages/Users/UserRoles';


function App() {
  return (
    <div className="App">
      
      <Router>                             
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/users/list' element={<UsersList />} />
              <Route path='/users/add' element={<AddUser />} />
              <Route path='/users/roles' element={<UserRoles />} />
          </Routes>
      </Router>


    </div>
  );
}

export default App;
