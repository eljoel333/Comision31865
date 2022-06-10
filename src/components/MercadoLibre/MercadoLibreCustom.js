import { useEffect } from "react";

const MercadoLibreCustom = () =>{
    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=bicicletas`)
        .then((resp) => {
          console.log(resp.json());
        })
        .then((res) => {
          console.log(res.results);
        })
        .catch((error) => {});
    })
};

export default MercadoLibreCustom;