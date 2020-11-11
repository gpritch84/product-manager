import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        <div>
            <>
                <h1>Product Manager</h1>
                <ProductForm />
                <hr />
                <h2>All Products</h2>
                <div className='d-flex flex-column'>
                    < ProductList product={product} removeFromDom={removeFromDom}/>
                </div>
            </>
        </div>
    )
}
