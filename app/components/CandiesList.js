import React from 'react';
import { CandiesRow } from './CandiesRow';
import { getCandiesThunk } from '../reducers/index';
import { connect } from 'react-redux';


class DCandiesList extends React.Component {
    componentDidMount() {
        this.props.getCandiesThunk();
    }

    render() {
        return (
            <div id='candies-list'>
                <table id='list'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Link</th>
                        </tr>
                    {
                        this.props.candies.map(candy => {
                            return (
                                <CandiesRow candy={candy} key={candy.id} />
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        candies: state.candies
    }
}
  
const mapDispatch = (dispatch) => {
    return {
        getCandiesThunk: () => dispatch(getCandiesThunk())
    }
}
  
export const CandiesList = connect(mapState, mapDispatch)(DCandiesList);