import React, { Component } from 'react';
import loading from './loading.gif';
import limit from './limit.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={this.props.status === "error" ? limit : loading} alt='loading' />
            </div>
        )
    }
}

export default Spinner
