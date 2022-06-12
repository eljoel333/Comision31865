import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../components/ProductosAPI/ProductosAPI";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = (category) =>{

    const [productDetail, setProductDetail] = useState();


    useEffect(()=>{
        getProductsByCategory('laptop').then(respuesta=>{
            setProductDetail(respuesta);

        })
    }, []);

    console.log(productDetail);



    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...productDetail}></ItemDetail>
        </>
    );
}

export default ItemDetailContainer;