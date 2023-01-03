const INITIAL_STATE = {
  templateInit: 'Ivanrice Discord',
  server: null,
  channel: '',
  userMenu: true,
  userItemModal: false,
  toggleChannel: false,
}

// eslint-disable-next-line default-param-last
export const appReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line no-console
  // console.log('Action reducer: ', action)
  switch (action.type) {
    case '@app/init':
      return { ...state, templateInit: action.payload }
    case '@channel/title':
      return { ...state, channel: action.payload }
    case '@user/userMenu':
      return { ...state, userMenu: action.payload }
    case '@user/itemModal':
      return { ...state, userItemModal: action.payload }
    case '@channel/toggle':
      return { ...state, toggleChannel: action.payload }
    case '@server/map':
      return { ...state, server: action.payload }
    default:
      return state
  }
}
