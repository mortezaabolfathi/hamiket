import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PanelAdmin from './components/PanelAdmin/PanelAdmin';
import LoginPage from './components/LoginPage/LoginPage';
import Product from './components/Product/Product';
import HomeLayout from './components/layout';


function App() {
  return (
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
  );
}

export default App;
