import { useState } from 'react';
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";  // Use Routes instead of Routers
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import { useAuth } from './pages/context/AuthContext';

function App() {
  console.log(useAuth()?.isLoggedIn);

  return (
    <main>
      <Header />
      <Routes>  {/* Use Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;

