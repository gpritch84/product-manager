import React, { useEffect, useState } from 'react'
import {navigate} from '@reach/router';
import axios from 'axios';

export default props => {

    // const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => {
                console.log (res)
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + props.id, {
            title,
            price,
            description,
        })
            .then(res => console.log(res))
            .then(res => {
                navigate('/product/' + props.id)
            })
    }

    return (

        <div>
            <h1>Update {title}</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label><br />
                    <input type="text"
                        name= "title"
                        value= { title }
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
