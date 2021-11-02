import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const Planet = (props) => {
    return (
        <table>
            <tr>
                <th>Climate:</th>
                <td>{props.data.climate}</td>
            </tr>
            <tr>
                <th>Terrain:</th>
                <td>{props.data.terrain}</td>
            </tr>
            <tr>
                <th>Surface Water:</th>
                <td>{props.data.surface_water}</td>
            </tr>
            <tr>
                <th>Population:</th>
                <td>{props.data.population}</td>
            </tr>
        </table>
    );
};

Planet.propTypes = {};

export default Planet;