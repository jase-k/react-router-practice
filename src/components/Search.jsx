import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const [param, setParam] = useState("planets");
    const [num, setNum] = useState("1");
    const history = useHistory();
    function handleSubmit(){
        let url = "/"+param+"/"+num
        history.push(url)
    }
    return (
        <div>
            <label htmlFor="param">Search for: </label>
            <select id="param" onChange={(e)=>{ setParam(e.target.value)}}>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="starships">starships</option>
            </select>
            <label htmlFor="number">Id: </label>
            <input type="number" id="number" onChange={(e)=>{ setNum(e.target.value)}}/>
            <input type="button" value="Search" onClick={handleSubmit} />
        </div>
    );
};

Search.propTypes = {};

export default Search;