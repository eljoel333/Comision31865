import { useState, useEffect } from "react";
import { getProductos } from "../container/ItemListContainer";
import '../App.css';


console.log(getProductos());

export default function Items(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos().then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  return (
    <>
      <h1>Mis productos</h1>
      <ul >
        {products.map((prod) => (
           <li key={prod.id}> <a className={prod.className} href={prod.url}> {prod.titulo}</a> 
           <img src={prod.url} className='tamanio'></img>

       </li>
        ))}
      </ul>
    </>
  );
}
