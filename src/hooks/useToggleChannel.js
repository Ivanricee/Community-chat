import { useDispatch, useSelector } from 'react-redux'
import { setToggleChannel } from '../store/actions/AppActions'

export const useToggleChannel = () => {
  const dispatch = useDispatch()
  const showChannel = useSelector(state => state.app.toggleChannel)
  const setShowChannel = option => dispatch(setToggleChannel(option))

  return [showChannel, setShowChannel]
}
