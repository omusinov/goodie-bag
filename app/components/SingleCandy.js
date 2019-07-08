import React from 'react';
import axios from 'axios';
import store from '../store';

export default class SingleCandy extends React.Component {
    constructor() {
        super();
        this.state = {
            candy: {}
        };
    }

    async componentDidMount() {
        const candyId = this.props.match.params.candyId;
        const { data } = await axios.get('/api/candies/' + candyId);
        this.setState({candy: data});
    }

    render() {
        const candy = this.state.candy;
        return (
            <div id='single-candy'>
                <button>Increase quantity</button>
                <button>Decrease quantity</button>
                <img src={candy.imageUrl} />
                <p>{candy.name}</p>
                <p>{candy.description}</p>
                <p>{candy.quantity}</p>
            </div>
        )
    }
}