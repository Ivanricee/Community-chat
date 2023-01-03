import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useToggleUserList } from '../../hooks/useToggleUserList'
import { ImgContainer } from '../ImgContainer'
import { Portal } from '../Portal'
import UserDetail from './UserDetail'

export const UserProfileItem = ({ className, user, userRoleName }) => {
  const [insetBlockSizeState, setInsetBlockSizeState] = useState({
    blockStart: null,
    blockEnd: null,
    showDetail: false,
  })
  const userItemModal = useSelector(state => state.app.userItemModal)
  const [showUserList] = useToggleUserList()
  const handleUserItemClick = useCallback(
    e => {
      const itemBlockSize = 376
      const remSize = 16
      const itemTopDistance = e.target.getBoundingClientRect().top
      const endItemBlockSize = itemBlockSize + itemTopDistance
      const { body } = document
      const html = document.documentElement

      const documentBlockSize = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )

      let blockStart = null
      let blockEnd = null
      // si el modal es mas largo que la pantalla
      if (endItemBlockSize > documentBlockSize) {
        blockEnd = 0
      } else {
        blockStart = itemTopDistance / remSize
      }
      setInsetBlockSizeState(prevInsetBlockSizeState => ({
        ...prevInsetBlockSizeState,
        blockEnd,
        blockStart,
        showDetail: !prevInsetBlockSizeState.showDetail,
      }))
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const keyDownUserItemClick = event => {
    if (event.keyCode === 13) {
      handleUserItemClick(event)
    }
  }
  const onKeyDownCloseModal = event => {
    if (event.keyCode === 27 && insetBlockSizeState.showDetail)
      setInsetBlockSizeState(prevInsetBlockSizeState => ({
        ...prevInsetBlockSizeState,
        showDetail: false,
      }))
  }
  const handleClickClose = () => {
    if (insetBlockSizeState.showDetail)
      setInsetBlockSizeState(prevInsetBlockSizeState => ({
        ...prevInsetBlockSizeState,
        showDetail: false,
      }))
  }
  useEffect(() => {
    if (!showUserList && insetBlockSizeState.showDetail)
      setInsetBlockSizeState(prevInsetBlockSizeState => ({
        ...prevInsetBlockSizeState,
        showDetail: false,
      }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUserList])
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={className}
        onClick={handleUserItemClick}
        onKeyDown={keyDownUserItemClick}
      >
        <div className="user__image-wrapper" tabIndex="-1">
          <ImgContainer
            img={user.img}
            greenBulletType="1"
            content=""
            inlineSize={0.58}
            blockSize={0.58}
            borderColor="black2"
          />
        </div>
        <span>{user.name}</span>
      </div>
      {insetBlockSizeState.showDetail && showUserList && (
        <Portal>
          <UserDetail
            tabIndex={-1}
            img={user.img}
            userName={user.name}
            userHash={user.hash}
            userRoleName={userRoleName}
            roleUser={user.role}
            displayShow={insetBlockSizeState.showDetail}
            userItemModalOpen={userItemModal}
            insetBlockStart={insetBlockSizeState.blockStart}
            insetBlockEnd={insetBlockSizeState.blockEnd}
            onKeyDownCloseModal={onKeyDownCloseModal}
            handleClickClose={handleClickClose}
          />
        </Portal>
      )}
    </>
  )
}
