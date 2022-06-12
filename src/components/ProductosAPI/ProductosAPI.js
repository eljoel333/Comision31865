import { useEffect, useState } from "react";

const API_URL = `https://api.mercadolibre.com/sites/MLA/search?q=`;

export async function getProductsDefault() {
  try {
    debugger;

    const response = await fetch(`${API_URL + "bicicletas"}`);
    const data = await response.json();
    console.log("tipo", typeof data.results);

    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsByCategory(id) {
  try {
    debugger;
    const response = await fetch(`${API_URL + "bicicletas"}`);
    const data = await response.json();

    let res = data.results.filter((x) => x.id === id);
    console.log("tipo", typeof data.results);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}
