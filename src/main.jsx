import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import UserTypesList from './component/UserTypesList.jsx';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Uootes-Technology-">
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/UserTypesList" element={<UserTypesList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

