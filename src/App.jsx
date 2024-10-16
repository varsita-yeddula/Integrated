import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login.jsx';
import Signup from './login/Signup.jsx';
import Landing from './landing/Landing.jsx';
import Userdb from './User_db/Userdb.jsx';
import Agentdb from './Agent_db/App.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Userdb" element={<Userdb />} />
        <Route path="/Agentdb" element={<Agentdb />} />
      </Routes>
    </Router>
  );
}

export default App
