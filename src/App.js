import React, {useState} from "react";
import "./App.css";
import NavBar from "./components/NavBar";


import {ProductosAPI, ProductosAPIByCategory} from './components/ProductosAPI/ProductosAPI';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
// const [page, setPage] = useState('/detail/MLA1120156750');
// // const [page, setPage] = useState({path:'detail', id:'MLA1120156750'});



  return (
    <div className="container">
      {/* <h1>Mi logo</h1>
      <NavBar></NavBar>
      <div>
        <button onClick={()=>setPage('list')}>List</button>
        <button onClick={()=>setPage('detail')} >detail</button>
      </div>
      {page === 'list' && <ItemListContainer greeting='hola'></ItemListContainer>}
      {page === 'detail' && <ItemDetailContainer></ItemDetailContainer>}
     
     <ProductosAPIByCategory categoria='laptop'></ProductosAPIByCategory> */}

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos'></ItemListContainer>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
