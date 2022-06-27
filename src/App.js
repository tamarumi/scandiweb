import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Routes, Route, link} from "react-router";

function App() {
  return (
    <div className="App">
    <>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/:id" element={<ProductPage/>}/>
    </Routes>
    </>
    </div>
  );
}

export default App;
