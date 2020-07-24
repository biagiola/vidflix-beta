const initialState = {
    authToken: '',
    toggleSidebar: true
}

export default function(state = initialState, action) {
    switch(action.type){
        case 'AUTH_TOKEN':
            console.log('AUTH_TOKEN')
            return {
                ...state,
                authToken: action.payload
            }
        case 'TOGGLE_SIDEBAR':
            console.log('TOGGLE_SIDEBAR reducer')
            return {
                ...state,
                authToken: action.payload
            }         
        default:
            return state;
    }
}