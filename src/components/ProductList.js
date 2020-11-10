import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    return (
        <div>
            {props.product.map((product, idx) => {
                return <Link to={`${product._id}`} key={idx}>{product.title} </Link>;
            })}
        </div>
    )
}
