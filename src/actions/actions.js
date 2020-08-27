export const setNewToken = token => dispatch => {
  dispatch({
    type: 'NEW_AUTH_TOKEN',
    payload: token
  })
}

export const toggleNavbar = () => dispatch => {
  dispatch({
    type: 'TOGGLE_NAV_ITEMS',
  })
}

export const toggleSidebar = () => dispatch => {
  dispatch({
    type: 'TOGGLE_SIDEBAR',
  })
}

export const toggleFeatureSubMenu = () => dispatch => {
  dispatch({
    type: 'TOGGLE_FEATURE_SUB_MENU',
  })
}

export const toggleServicesSubMenu = () => dispatch => {
  dispatch({
    type: 'TOGGLE_SERVICES_SUB_MENU',
  })
}

export const animateDownArrowFeature = () => dispatch => {
  dispatch({
    type: 'ANIMATE_DOWN_ARROW_FEATURE'
  })
}

export const animateDownArrowServices = () => dispatch => {
  dispatch({
    type: 'ANIMATE_DOWN_ARROW_SERVICES'
  })
}