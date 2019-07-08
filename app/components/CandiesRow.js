import React from 'react';
import { Link } from 'react-router-dom';

export const CandiesRow = (props) => {
    const candy = props.candy;
    return (
        <tr>
            <td>{candy.name}</td>
            <td>{candy.description}</td>
            <td>{candy.quantity}</td>
            <td><Link to={`/candies/${candy.id}`}>More...</Link></td>
        </tr>
    )
}