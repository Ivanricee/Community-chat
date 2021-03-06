import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Portal } from '../Portal'
import { Loader } from '../Loader'
import { useChannelComment } from '../../graphql/custom-hook'
import {
    setChnlCmntsToggleMenu,
    setUserMenu,
} from '../../store/actions/AppActions'
import {
    StyledMain,
    StyledCommentList,
    StyledFooter,
    StyledInputWrapper,
    StyledIntroduction,
} from './styles'
import { Comment } from '../Comment'

const VideoRoom = React.lazy(() => import('../VideoRoom'))

const handleEmojiHover = (arrayEmojis, urlEmoji) => {
    let randomEmoji = Math.floor(Math.random() * arrayEmojis.length)
    if (arrayEmojis[randomEmoji].src === urlEmoji)
        randomEmoji = Math.floor(Math.random() * arrayEmojis.length)
    return arrayEmojis[randomEmoji].src
}

const Main = ({ params }) => {
    const { server, channel } = params
    const dispatch = useDispatch()
    const storedChannelTitle = useSelector(state => state.app.channel)
    const storedServerTitle = useSelector(state => state.app.server)
    const storedUserMenu = useSelector(state => state.app.userMenu)
    const showChnlCmntsToggleMenu = useSelector(
        state => state.app.showChnlCmntsToggleMenu
    )
    const { data, loading } = useChannelComment(server, channel)

    const [urlEmoji, setUrlEmoji] = useState(
        'https://res.cloudinary.com/ivanrice-c/image/upload/v1642795216/discord-clone/fonts/emojis/05_Laugh_rzq4mh.png'
    )
    const [arrayEmojis, setArrayEmojis] = useState([])
    /*
     *Al click on the blocked comments:
     * cambia el css para mostrar los comentarios y el header por completo
     * si detecta que se estan mostrando los usuarios simplemente los esconde de nuevo.
     * para que se muestren los comentarios y el header por completo de nuevo
     */
    const handleClickEnableComments = useCallback(() => {
        dispatch(setChnlCmntsToggleMenu(!showChnlCmntsToggleMenu))
        if (storedUserMenu) dispatch(setUserMenu(!storedUserMenu))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    // preload and store an emojis array
    // refct: make a service.
    useEffect(() => {
        const rootPath =
            'https://res.cloudinary.com/ivanrice-c/image/upload/v1642795216/discord-clone/fonts/emojis/'
        const emojis = [
            '05_Laugh_rzq4mh.png',
            '10_LMAO_xqkvgt.png',
            '11_ROFL_qf4jgb.png',
            '04_Grin_v307u8.png',
            '08_LOL_zksb6l.png',
            '07_Really_happy_khzpky.png',
            '09_Relieved_laughter_i13hnr.png',
            '01_Smile_ihsfiu.png',
            '06_Contented_h2b8xa.png',
        ]
        const imgEmoji = []
        emojis.forEach((emoji, i) => {
            // eslint-disable-next-line no-undef
            imgEmoji[i] = new Image()
            imgEmoji[i].src = `${rootPath}${emojis[i]}`
        })
        setArrayEmojis(imgEmoji)
    }, [])

    if (!channel && !server && !data)
        return <Loader justifyContent="center" alignItems="center" />
    let AccDate = 0
    return (
        <StyledMain
            showChnlCmntsToggleMenu={showChnlCmntsToggleMenu}
            storedUserMenu={storedUserMenu}
        >
            <Helmet>
                <title>
                    {storedServerTitle}, {storedChannelTitle}{' '}
                </title>
                <meta
                    name="description"
                    content={`${(storedServerTitle, storedChannelTitle)}`}
                />
            </Helmet>
            <div
                role="button"
                aria-label="Enable comments"
                className="main__mobile-shadow-wrapper"
                onClick={handleClickEnableComments}
                onKeyDown={handleClickEnableComments}
                tabIndex={0}
            />
            <StyledCommentList>
                {loading || data.findComment === null ? (
                    <StyledIntroduction channelTitle={storedChannelTitle} />
                ) : (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                        {data.findComment.title === 'video/audio' ? (
                            <Suspense
                                fallback={
                                    <Loader
                                        justifyContent="center"
                                        alignItems="center"
                                    />
                                }
                            >
                                <Portal>
                                    <VideoRoom
                                        channelTitle={storedChannelTitle}
                                    />
                                </Portal>
                            </Suspense>
                        ) : (
                            <div>
                                <StyledIntroduction
                                    channelTitle={storedChannelTitle}
                                />
                                {data.findComment.comments.map(comment => {
                                    let showLine = true
                                    const dateFormat = new Date(comment.date)
                                    if (AccDate !== 0) {
                                        if (
                                            dateFormat.getTime() >
                                            AccDate.getTime()
                                        ) {
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
                                            role={comment.user.role}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </>
                )}
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
                        <i
                            className="ico-Grin"
                            onMouseOver={() =>
                                setUrlEmoji(
                                    handleEmojiHover(arrayEmojis, urlEmoji)
                                )
                            }
                            onFocus={() =>
                                setUrlEmoji(
                                    handleEmojiHover(arrayEmojis, urlEmoji)
                                )
                            }
                        >
                            <img src={urlEmoji} alt="emoji" />
                        </i>
                    </div>
                </StyledInputWrapper>
            </StyledFooter>
        </StyledMain>
    )
}

export default Main
