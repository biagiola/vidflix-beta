const initialState = {
    authToken: null,
    toggleSidebarValue: false,
    toggleNavItemsValue: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case 'NEW_AUTH_TOKEN':
        return {
            ...state,
            authToken: action.payload
        }
        case 'TOGGLE_NAV_ITEMS':
        return {
            ...state,
            toggleNavItemsValue: !state.toggleNavItemsValue
        }
        case 'TOGGLE_SIDEBAR':
        return {
            ...state,
            toggleSidebarValue: !state.toggleSidebarValue
        }         
        default:
        return state
    }
}