import { useEffect, useState } from "react";
import { getProductsDefault } from "../../components/ProductosAPI/ProductosAPI";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{

    const [productDetail, setProductDetail] = useState();


    useEffect(()=>{
        getProductsDefault().then(respuesta=>{
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