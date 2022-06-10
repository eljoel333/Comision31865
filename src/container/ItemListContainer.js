import { useEffect, useState } from "react";


const MercadoLibre = () => {
    const [productos, setProductos] = useState([]);
   
  debugger;
      useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares")
          .then(resp => {
            return resp.json();
          })
          .then(res => {
            setProductos(res.results);
          })
          .catch(error => {
  
          });
      }, []);
      return productos;
}


export const getProductos = () => {
    debugger;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MercadoLibre);
    }, 500);
  });
};

export const getProductoByID = (id) => {
    debugger;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MercadoLibre.find((prod) => prod.id === id));
    }, 500);
  });
};
