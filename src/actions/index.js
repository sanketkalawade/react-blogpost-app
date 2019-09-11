import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'

// export const fetchPosts = () =>{
//     return async (dispatch,getState) =>{
//         const response =  await jsonPlaceholder.get('/posts');
        
//         const myActionCreator = {
//             type:'FETCH_POSTS',
//             payload:response
//         };
        
//         dispatch(myActionCreator);
//     }
// }

//same as above just es2015 syntax used below
export const fetchPosts = () => async dispatch =>{
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    })
}

export const fetchUser = (userId) => async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type:'FETCH_SINGLE_USER',
        payload:response.data
    })
}

//2nd method to overcome fetching problem
export const fetchUsersAndPosts = () => async (dispatch, getState) =>{
    await dispatch(fetchPosts());
    const uniqUserId = _.uniq(_.map(getState().posts, 'userId'));
    uniqUserId.forEach(id=>dispatch(fetchUser(id)));
}



// 1st method:-  memoization by using lodash to overcome fetching request with same userId 10 times
// export const fetchUser = (userId) => dispatch =>{
//     _fetchUser(userId,dispatch);
// }

// const _fetchUser = _.memoize(async(userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({
//         type:'FETCH_SINGLE_USER',
//         payload:response.data
//     })
// })