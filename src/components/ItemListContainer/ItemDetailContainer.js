import { useEffect, useState } from "react";
import { getProductoByID } from "../../container/ItemListContainer";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{

    const [productDetail, setProductDetail] = useState();


    useEffect(()=>{
        getProductoByID(5).then(respuesta=>{
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