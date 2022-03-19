export const action = {
  type: '@app/init',
  payload: [],
}
export const getChannel = payload => ({
  type: '@channel/title',
  payload,
})

export const setUserMenu = payload => ({
  type: '@user/userMenu',
  payload,
})
