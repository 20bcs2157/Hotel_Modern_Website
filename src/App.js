import React from "react";
import Header from "./components/Header";
import Home from "./components/Home"
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
