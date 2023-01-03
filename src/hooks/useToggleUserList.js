import { useDispatch, useSelector } from 'react-redux'
import { setUserMenu } from '../store/actions/AppActions'

export const useToggleUserList = () => {
  const dispatch = useDispatch()
  const showUserList = useSelector(state => state.app.userMenu)
  const setShowUserList = option => {
    dispatch(setUserMenu(option))
  }
  return [showUserList, setShowUserList]
}
