import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PanelAdmin from './components/PanelAdmin/PanelAdmin';
import LoginPage from './components/LoginPage/LoginPage';
import Product from './components/Product/Product';
import HomeLayout from './components/layout';
import { Provider } from 'react-redux';
import {store} from "./feathers/store";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from './feathers/products/productsServices';

function App() {
  return (
        <Provider store={store}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LoginPage/>}/>
                  <Route path="/panelAdmin" element={<PanelAdmin/>}/>     
                  <Route path="/admin" element={<HomeLayout/>}>
                    <Route path="products" element={<Product/>}/>         
                    <Route path="products/:id" element={<Product/>}/>         
                  </Route> 
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
  );
}

export default App;
