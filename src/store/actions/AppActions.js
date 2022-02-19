export const action = {
  type: '@app/init',
  payload: [],
}
export const getChannel = payload => ({
  type: '@channel/title',
  payload,
})
