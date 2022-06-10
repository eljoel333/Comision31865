import { useEffect, useState } from "react";

const MercadoLibre = () => {
  const [productos, setProductos] = useState([]);
  const [input, setInput] = useState("");

  //   useEffect(() => {
  //     fetch("https://api.mercadolibre.com/sites/MLA/search?q=celulares")
  //       .then(resp => {
  //         return resp.json();
  //       })
  //       .then(res => {
  //         setProductos(res.results);
  //       })
  //       .catch(error => {

  //       });
  //   }, []);
  // console.log(productos);

  const handleSubmit = (e) => {
      e.preventDefault();

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setProductos(res.results);
      })
      .catch((error) => {});
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <input type='submit' value='buscar'></input>
      </form>
      <h1>Hola Mercado</h1>
      <ul>
        {productos.map((prod) => {
          return (
            <li key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <p>{prod.title}</p>
              <p>{prod.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MercadoLibre;
