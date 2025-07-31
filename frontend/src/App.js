
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import DepartmentPage from './DepartmentPage';
import DepartmentList from './components/DepartmentList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/departments/:id" element={<DepartmentPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
