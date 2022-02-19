import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useChannelComment } from '../../graphql/custom-hook'
import {
    StyledMain,
    StyledHeader,
    StyledCommentList,
    StyledFooter,
    StyledInputWrapper,
} from './styles'
import { Comment } from '../Comment'

const handleEmojiHover = (arrayEmojis, urlEmoji) => {
    let randomEmoji = Math.floor(Math.random() * arrayEmojis.length)
    if (arrayEmojis[randomEmoji].src === urlEmoji)
        randomEmoji = Math.floor(Math.random() * arrayEmojis.length)
    return arrayEmojis[randomEmoji].src
}

const Main = ({ params }) => {
    const { server, channel } = params
    const storedChannelTitle = useSelector(state => state.app.channel)
    const { data, loading } = useChannelComment(server, channel)

    const [urlEmoji, setUrlEmoji] = useState(
        'https://res.cloudinary.com/ivanrice-c/image/upload/v1642795216/discord-clone/fonts/emojis/05_Laugh_rzq4mh.png'
    )
    const [arrayEmojis, setArrayEmojis] = useState([])
    // preload and store an emojis array
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

    if (channel && server && data) {
        return (
            <StyledMain>
                <StyledHeader>
                    {storedChannelTitle
                        ? `# ${storedChannelTitle}`
                        : 'Loading...'}
                </StyledHeader>
                <StyledCommentList>
                    {loading || data.findComment === null ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            {data.findComment.comments.map(comment => {
                                return (
                                    <Comment
                                        key={comment._id}
                                        date={comment.date}
                                        img={comment.img}
                                        texto={comment.texto}
                                        react={comment.react}
                                        reply={comment._id_comment_reply}
                                        nombre={comment.user.name}
                                        userImg={comment.user.img}
                                        role={comment.user.role}
                                    />
                                )
                            })}
                        </div>
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
                                placeholder="la reconcha de mi perro"
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
    return <div>Redirecting to a channel</div>
}

export default Main
