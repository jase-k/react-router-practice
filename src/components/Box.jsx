import React from 'react';
import PropTypes from 'prop-types';
import Number from './Number';
import { useParams } from 'react-router';
const Box = () => {
    const {txtc, bgc} = useParams()
    return (
        <div style={{backgroundColor: bgc, color: txtc}}>
            < Number/>
        </div>
    );
};

Box.propTypes = {};

export default Box;