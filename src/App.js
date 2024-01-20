import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navebar from './components/Navebar';
import Home from './pages/Home';
import Footer from './components/Footer';
import FetchData from './components/FetchData';
const App = () => {
  return (
    <>
    <Router>
    <Navebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/General" element={<FetchData cat="General" />} />
        <Route path="/Business" element={<FetchData cat="Business" />} />
        <Route path="/Entertainment" element={<FetchData cat="Entertainment" />} />
        <Route path="/Health" element={<FetchData cat="Health" />} />
        <Route path="/Science" element={<FetchData cat="Science" />} />
        <Route path="/Sports" element={<FetchData cat="Sports" />} />
        <Route path="/Technology" element={<FetchData cat="Technology" />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App