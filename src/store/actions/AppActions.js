export const action = {
  type: '@app/init',
  payload: [],
}
export const getChannel = payload => ({
  type: '@channel/title',
  payload,
})
export const getServer = payload => ({
  type: '@server/name',
  payload,
})
export const setUserMenu = payload => ({
  type: '@user/userMenu',
  payload,
})

export const setChnlCmntsToggleMenu = payload => ({
  type: '@header-comments/showFullLength',
  payload,
})
