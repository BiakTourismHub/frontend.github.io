import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Mengganti Switch dengan Routes
import Login from './Login';
import Register from './Register';
import Landing from './Landingpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Ganti Switch dengan Routes */}
          <Route path="/login" element={<Login />} /> {/* Ganti component dengan element */}
          <Route path="/register" element={<Register />} /> {/* Ganti component dengan element */}
          <Route path="/frontend.github.io/" element={<Landing />} /> {/* Ganti component dengan element */}
          {/* Tambahkan rute lainnya di sini */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
