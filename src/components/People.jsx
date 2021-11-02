import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const People = (props) => {
    return (
        <table>
            <tr>
                <th>Height:</th>
                <td>{props.data.height}</td>
            </tr>
            <tr>
                <th>Mass:</th>
                <td>{props.data.mass}</td>
            </tr>
            <tr>
                <th>Hair Color:</th>
                <td>{props.data.hair_color}</td>
            </tr>
            <tr>
                <th>Skin Color:</th>
                <td>{props.data.skin_color}</td>
            </tr>
        </table>
    );
};

People.propTypes = {};

export default People;