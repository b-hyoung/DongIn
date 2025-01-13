import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage.tsx';
import MainPage from './MainPage/MainPage.tsx';
import { Route,Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<LoginPage />} />
        <Route path = "/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
