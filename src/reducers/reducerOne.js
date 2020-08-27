const initialState = {
    authToken: null,
    toggleSidebarValue: false,
    toggleNavItemsValue: false,
    subMenuFeature: false,
    subMenuServices: false,
    downArrowFeatureRotate: false,
    downArrowServicesRotate: false
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

        case 'TOGGLE_FEATURE_SUB_MENU':
            return {
                ...state,
                subMenuFeature: !state.subMenuFeature,
            }         

        case 'TOGGLE_SERVICES_SUB_MENU':
            return {
                ...state,
                subMenuServices: !state.subMenuServices,
            }
        
        case 'ANIMATE_DOWN_ARROW_FEATURE':
            return {
                ...state,
                downArrowFeatureRotate: !state.downArrowFeatureRotate
            }

        case 'ANIMATE_DOWN_ARROW_SERVICES':
            return {
                ...state,
                downArrowServicesRotate: !state.downArrowServicesRotate
            }
        
        default:
        return state
    }
}