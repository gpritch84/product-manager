import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] =useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
    },[])

    return (
        <div>
            <>
            <h1>Product Manager</h1>
            <ProductForm/>
            <hr/>
            <h2>All Products</h2>
            < ProductList product = { product } />
            </>
        </div>
    )
}
