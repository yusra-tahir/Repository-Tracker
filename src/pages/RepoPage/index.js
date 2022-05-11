import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RepoSearch, Result } from '../../components';
import { getResult } from '../../actions';

const RepoPage = () => {
    const dispatch = useDispatch();

    const result = useSelector(state => state.result);
    const name = useSelector(state => state.name);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error); 

    let search = searchTerm => dispatch(getResult(searchTerm));

    // auto loads London
    useEffect(() => {
        dispatch(getResult('WalkingZ3d'));
    }, [])

    const renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result}/>

    return (
        <div id="search">
            Enter GitHub username below:
            <br/>
            <RepoSearch getResult={search}/>
            <h1>{name.split(' ').map(l => l.charAt(0).toUpperCase() + l.slice(1)).join(' ')}</h1>
            { error ? <p role='alert'>{error}</p> : renderResult() }    
        </div>
    );
}

export default RepoPage;