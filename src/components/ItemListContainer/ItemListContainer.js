
import { useState, useEffect } from 'react'
// import { getProducts } from '../../asyncmock'
import {getProductsDefault}from '../../components/ProductosAPI/ProductosAPI'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsDefault().then(response => {
            setProducts(response)
        })
    }, [])

    // const productsComponets = products.map(product => {
    //     return (
    //         <li key={product.id}>
    //             {product.name}
    //         </li>
    //     )
    // })

    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer