export const setNewToken = token => dispatch => {
  console.log('actions: token: ', token)
  dispatch({
    type: 'AUTH_TOKEN',
    payload: token
  })
}

export const toggleSidebar = () => dispatch => {
  console.log('actions: toggleSidebar: ')
  dispatch({
    type: 'TOGGLE_SIDEBAR',
  })
}