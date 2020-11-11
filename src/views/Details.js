import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {

    const [product, setProduct] = useState({})

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                navigate('/product')
            })
    }
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data.product))
    }, [props])

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/update/" + product._id }>Edit</Link> <br/>
            <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
        </div>
    )
}
