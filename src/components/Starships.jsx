import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const Starships = (props) => {
    return (
        <table>
            <tr>
                <th>Class:</th>
                <td>{props.data.starship_class}</td>
            </tr>
            <tr>
                <th>Crew:</th>
                <td>{props.data.crew}</td>
            </tr>
            <tr>
                <th>Length:</th>
                <td>{props.data.length} ft</td>
            </tr>
            <tr>
                <th>Passengers:</th>
                <td>{props.data.passengers}</td>
            </tr>
        </table>
    );
};

Starships.propTypes = {};

export default Starships;