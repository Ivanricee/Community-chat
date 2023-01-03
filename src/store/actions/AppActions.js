export const action = {
  type: '@app/init',
  payload: [],
}
export const setChannel = payload => ({
  type: '@channel/title',
  payload,
})
export const setServer = payload => ({
  type: '@server/map',
  payload,
})
export const setUserMenu = payload => ({
  type: '@user/userMenu',
  payload,
})

export const setToggleChannel = payload => ({
  type: '@channel/toggle',
  payload,
})
export const setUserItemModal = payload => ({
  type: '@user/itemModal',
  payload,
})
