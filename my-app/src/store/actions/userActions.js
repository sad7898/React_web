export const setCurrentUser = (userData) => {
    return {
    type: 'SET_CURRENT_USER',
    user: userData
    }
}
export const logOut = () =>{
    return {
    type: 'LOG_OUT'}
}