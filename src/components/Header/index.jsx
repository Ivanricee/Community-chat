import React from 'react'
import { useSelector } from 'react-redux'
import { IoMdMenu } from 'react-icons/io'
import { HeaderSearchHelp } from './HeaderSearchHelp'
import { StyledHeader, StyledHeaderSearchHelp } from './styles'
import { Loader } from '../Loader'
import { useToggleChannel } from '../../hooks/useToggleChannel'
import { useToggleUserList } from '../../hooks/useToggleUserList'

const Header = () => {
  const [showChannel, setShowChannel] = useToggleChannel()
  const [showUserList] = useToggleUserList()
  const storedChannelTitle = useSelector(state => state.app.channel)

  return (
    <StyledHeader showChannel={showChannel} showUserList={showUserList}>
      <div className="haeder__title">
        <IoMdMenu
          ismenu="hamburg"
          onClick={() => setShowChannel(!showChannel)}
        />
        {storedChannelTitle ? (
          `# ${storedChannelTitle}`
        ) : (
          <Loader justifyContent="start" alignItems="center" />
        )}
      </div>
      <StyledHeaderSearchHelp>
        <HeaderSearchHelp
          headerItems={showChannel ? 'headerDesk' : 'userMobile'}
        />
      </StyledHeaderSearchHelp>
    </StyledHeader>
  )
}
export default Header
