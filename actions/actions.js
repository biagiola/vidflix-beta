export const setNewToken = token => dispatch => {
  console.log('actions: token: ', token)
  dispatch({
    type: 'NEW_AUTH_TOKEN',
    payload: token
  })
}

export const toggleNavbar = () => dispatch => {
  console.log('actions: toggleNavItmes: ')
  dispatch({
    type: 'TOGGLE_NAV_ITEMS',
  })
}

export const toggleSidebar = () => dispatch => {
  console.log('actions: toggleSidebar: ')
  dispatch({
    type: 'TOGGLE_SIDEBAR',
  })
}