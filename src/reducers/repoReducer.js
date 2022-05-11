const initState = { name: "", result: {repos: ""}, loading: false};

const repoReducer = (state=initState, action) => {
    // console.log(action.payload)
    switch(action.type){
        case 'LOADING':
            return { ...state, name: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default :
            return state
    };
};

export default repoReducer;
