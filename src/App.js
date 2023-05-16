import React from "react";
import Header from "./components/Header";
import Navbar from './components/Navbar';
//import ScrollBar from './components/ScrollBar';
import Home from "./components/Home"
import Search from "./components/Search";
import './App.css';
import Loader from './Loader';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(prev => !prev);
    setTimeout(() => {
      setLoading(prev => !prev);
    }, 3000);
  }, []);

  if (loading) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <div>
      <Navbar />
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
      </div>
    )}
    </>
  );
}

export default App;