import axios from 'axios';

const loading = name => ({ type: 'LOADING', payload: name });

const loadResult = ({ results: { repos } }) => ({ 
    type: 'LOAD_RESULT',
    payload: { repos } 
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const repos = await fetchRepos(searchTerm);
            dispatch(loadResult(repos))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

export const fetchRepos = async searchTerm => {
    console.log(searchTerm);
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}/repos?sort=created`);
        //const { data } = await axios.get(`https://api.github.com/users/WalkingZ3d/repos?sort=created`);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
        //document.querySelector('h1').textContent = data[0].capital
        return data[0];
    } catch(err) {
        if (err) { throw Error('That\'s not a valid GitHub username!') }
        else {
        throw new Error(err.message)
        }
    }
}
