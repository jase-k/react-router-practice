import React from 'react';
import PropTypes from 'prop-types';
import Item from './People';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';
import People from './People';
import Planet from './Planet';
import Starships from './Starships';


const Results = () => {
    const {param, num} = useParams()
    const [data, setData] = useState({})
    let url = "https://swapi.dev/api/"+param+"/"+num
    useEffect(() => {
        axios.get(url)
        .then(response => setData(response.data))
        .then(console.log(data))
        
    }, []);
    return (
        <>
            <h2>{data.name}</h2>
            {(param === "planets") ?
                <Planet data={data}/>
                : (param ==="people") ?
                    <People data={data} />
                    : < Starships data={data} />
            }
        </>
    );
};

Results.propTypes = {};

export default Results;