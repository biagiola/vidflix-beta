const initialState = {
    authToken: null,
    toggleSidebarValue: false,
    toggleNavItemsValue: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case 'NEW_AUTH_TOKEN':
            console.log('reducer token')
            return {
                ...state,
                authToken: action.payload
            }
        case 'TOGGLE_NAV_ITEMS':
            console.log('TOGGLE_SIDEBAR reducer')
            return {
                ...state,
                toggleNavItemsValue: !state.toggleNavItemsValue
            }
        case 'TOGGLE_SIDEBAR':
            console.log('TOGGLE_SIDEBAR reducer')
            return {
                ...state,
                toggleSidebarValue: !state.toggleSidebarValue
            }         
        default:
            return state;
    }
}