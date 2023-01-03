import React, { useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TitleMeta } from '../TitleMeta'
import { Portal } from '../Portal'
import { Loader } from '../Loader'
import { useChannelComment } from '../../graphql/custom-hook'
import { useToggleChannel } from '../../hooks/useToggleChannel'
import {
  StyledMain,
  StyledCommentList,
  StyledFooter,
  StyledInputWrapper,
  StyledIntroduction,
} from './styles'
import { Comment } from '../Comment'
import { useToggleUserList } from '../../hooks/useToggleUserList'
import { EmojiIcon } from './EmojiIcon'

const VideoRoom = React.lazy(() => import('../VideoRoom'))

const Main = ({ params }) => {
  const { server, channel } = params
  const storedChannelTitle = useSelector(state => state.app.channel)
  const [showChannel, setShowChannel] = useToggleChannel()
  const [showUserList, setShowUserList] = useToggleUserList()
  const { data, error, loading } = useChannelComment(server, channel)

  const handleEnableMain = () => {
    setShowChannel(false)
    setShowUserList(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }
  const commentList = () => {
    let AccDate = 0
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment

      data.findComment.title === 'video/audio' ? (
        <Suspense
          fallback={<Loader justifyContent="center" alignItems="center" />}
        >
          <Portal>
            <VideoRoom channelTitle={storedChannelTitle} />
          </Portal>
        </Suspense>
      ) : (
        <div>
          {data.findComment.comments.map(comment => {
            let showLine = true
            const dateFormat = new Date(comment.date)
            if (AccDate !== 0) {
              if (dateFormat.getTime() > AccDate.getTime()) {
                AccDate = new Date(comment.date)
                showLine = true
              } else {
                showLine = false
              }
            } else {
              AccDate = new Date(comment.date)
              showLine = true
            }
            return (
              <Comment
                key={comment._id}
                date={{
                  dateFormat,
                  showLine,
                }}
                img={comment.img}
                url={comment.url}
                texto={comment.texto}
                react={comment.react}
                reply={comment.comment_reply}
                nombre={comment.user.name}
                userImg={comment.user.img}
                roleNo={comment.user.role}
              />
            )
          })}
        </div>
      )
    )
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (!channel) navigate('1')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (error)
    return (
      <StyledMain showChannel={showChannel} showUserList={showUserList}>
        <p>Error de conexión</p>
      </StyledMain>
    )
  if (loading) return <Loader justifyContent="center" alignItems="center" />

  return (
    <StyledMain showChannel={showChannel} showUserList={showUserList}>
      <TitleMeta server={server} channelTitle={storedChannelTitle} />
      <div
        role="button"
        aria-label="Enable comments"
        className="main__mobile-shadow-wrapper"
        onClick={handleEnableMain}
        onKeyDown={handleEnableMain}
        tabIndex={0}
      />
      <StyledCommentList>
        <StyledIntroduction channelTitle={storedChannelTitle} />
        {data.findComment !== null && commentList()}
      </StyledCommentList>
      <StyledFooter>
        <StyledInputWrapper>
          <div>
            <i className="ico-addFile" />
          </div>
          <div>
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder={`Enviar mensaje a #${storedChannelTitle}`}
            />
          </div>
          <div>
            <i className="ico-gift" />
            <i className="ico-gif" />
            <i className="ico-sticker" />
            <EmojiIcon />
          </div>
        </StyledInputWrapper>
      </StyledFooter>
    </StyledMain>
  )
}

export default Main
