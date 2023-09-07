

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error404 from './pages/Error404.jsx'
import ProductList from './components/ProductList.jsx'
import Nav from "./components/Nav.jsx"
import MonFormulaire from './pages/Contact.jsx'
import ProductDetail from './pages/ProductDetail.jsx'


function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<MonFormulaire />}/>
       
        <Route path='/produits' element={<ProductList/>} />
        <Route path='/produits/:id' element={<ProductDetail />} />
     
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
