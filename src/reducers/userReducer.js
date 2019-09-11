export default (state=[], action) =>{
    switch (action.type) {
        case 'FETCH_SINGLE_USER':
            return [...state,action.payload];
        default:
            return state;
    }
}