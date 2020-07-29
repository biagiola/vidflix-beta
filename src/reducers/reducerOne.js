const initialState = {
    authToken: null,
    toggleSidebar: true
}

export default function(state = initialState, action) {
    switch(action.type){
        case 'NEW_AUTH_TOKEN':
            console.log('reducer token')
            return {
                ...state,
                authToken: action.payload
            }
        case 'TOGGLE_SIDEBAR':
            console.log('TOGGLE_SIDEBAR reducer')
            return {
                ...state,
                authToken: null
            }         
        default:
            return state;
    }
}