var defaultState = {
    number: 0
}

export default (preState = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            return {
                ...preState,
                number: action.number 
            };
        default:
            return preState;
    }
}