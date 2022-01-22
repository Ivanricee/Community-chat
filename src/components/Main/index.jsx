import React, { useState } from 'react'
import { useChannelComment } from '../../graphql/custom-hook'

import {
    StyledMain,
    StyledHeader,
    StyledComment,
    StyledFooter,
    StyledInputWrapper,
} from './styles'

const handleEmojiHover = urlEmoji => {
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
    let randomEmoji = Math.floor(Math.random() * emojis.length)
    if (`${rootPath}${emojis[randomEmoji]}` === urlEmoji)
        randomEmoji = Math.floor(Math.random() * emojis.length)

    return `${rootPath}${emojis[randomEmoji]}`
}
const Main = ({ params }) => {
    const { server, channel } = params
    const { data } = useChannelComment(server, channel)
    const [urlEmoji, setUrlEmoji] = useState(
        'https://res.cloudinary.com/ivanrice-c/image/upload/v1642795216/discord-clone/fonts/emojis/05_Laugh_rzq4mh.png'
    )
    if (channel && server && data) {
        console.log('result ', data)
    }

    return (
        <StyledMain>
            <StyledHeader># extra-roles</StyledHeader>
            <StyledComment>
                <h1>{channel}</h1>
                <h1>{channel}</h1> <h1>{channel}</h1> <h1>{channel}</h1>{' '}
                <h1>{channel}</h1>
                <h1>{channel}</h1> <h1>{channel}</h1>
                <h1>{channel}</h1>
                <h1>{channel}</h1>
                <h1>{channel}</h1>
                <h1>{channel}</h1>
                <h1>{channel}</h1>v v<h1>{channel}</h1> <h1>{channel}</h1>
                <h1>{channel}</h1>
            </StyledComment>
            <StyledFooter>
                <StyledInputWrapper urlEmoji={urlEmoji}>
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
                                setUrlEmoji(handleEmojiHover(urlEmoji))
                            }
                            onFocus={() =>
                                setUrlEmoji(handleEmojiHover(urlEmoji))
                            }
                        />
                    </div>
                </StyledInputWrapper>
            </StyledFooter>
        </StyledMain>
    )
}

export default Main
