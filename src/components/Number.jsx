import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const Number = () => {
    const {num} = useParams()
    let response = ""
    if(isNaN(num)){
        response = "The word is: " + num
    }
    else{
        response = "The number is: " + num
    }

    return (
        <h1>
            {response}
        </h1>
    );
};

Number.propTypes = {};

export default Number;