import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value); // Hook

    const restarClick = () => setCounter(counter - 1);

    const resetarClick = () => setCounter(value);

    const sumarClick = () => setCounter(counter + 1);

    return (
        <>
            <h1>CounterApp</h1>
            <div>
                <h2>{ counter }</h2>
            </div>
            <button onClick={ restarClick }>Restar - 1</button>
            <button onClick={ resetarClick }>Resetear</button>
            <button onClick={ sumarClick }>Sumar + 1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;