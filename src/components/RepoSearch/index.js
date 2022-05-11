import React, { useState } from 'react';

function RepoSearch({ getResult }) {

    const [ name, setName ] = useState("")

    // define function (how did I miss this earlier?)
    const handleSubmit = e => {
        e.preventDefault();
        getResult(name);
        setName("");
    }

    // define function (how did I miss this earlier?)
    const updateInput = e => {
        const input = e.target.value 
        setName(input)
    }

    // add an onChange and a label
    return (
        <form onSubmit={handleSubmit} role="form">
            <label htmlFor='searchInp'>Location</label>
            <input type="text" id='searchInp' name='searchInp' onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default RepoSearch;
