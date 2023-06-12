import React from 'react';
import loading from './loading.gif';
import limit from './limit.gif';

const Spinner = (props) => {
    let {status} =props;
    return (
        <div className='text-center'>
            <img src={status === "error" ? limit : loading} alt='loading' />
        </div>
    )

}

export default Spinner
