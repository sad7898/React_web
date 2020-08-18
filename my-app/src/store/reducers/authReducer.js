
let initialState = {
    isAuthorized : false,
    user : {},
    isAdmin: false
}
export const authReducer = (state=initialState,action) => {
    switch(action.type){
        case('SET_CURRENT_USER'):
            return {
                user: action.user,
                isAuthorized:true,
                isAdmin: false
            }
        case('LOG_OUT'):
            return (
                initialState
            )
        default:
            return initialState;
    }
}