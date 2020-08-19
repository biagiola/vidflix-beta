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