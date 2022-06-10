import { useEffect, useState } from "react";

const API_URL = `https://api.mercadolibre.com/sites/MLA/search?q=`;

export async function getProductsDefault() {
    try {
      const response = await fetch(`${API_URL+'bicicletas'}`);
      const data = await response.json();
      console.log(data.results);
      return data;
    } catch (error) {
      console.error(error);
    }
  }


  export async function getProductsByCategory(categoria) {
    try {
      const response = await fetch(`${API_URL + categoria}`);
      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
