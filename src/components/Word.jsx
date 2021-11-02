import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const Word = () => {
    const {word} = useParams()
    return (
        <h1>
            The Word of the Day: {word}
        </h1>
    );
};

Word.propTypes = {};

export default Word;