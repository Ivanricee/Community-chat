import React from 'react'
import { useChannelComment } from '../../graphql/custom-hook'

import {
    StyledMain,
    StyledHeader,
    StyledComment,
    StyledFooter,
    StyledInputWrapper,
} from './styles'

const Main = ({ params }) => {
    const { server, channel } = params
    const { data } = useChannelComment(server, channel)
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
                        <i className="ico-emoji" />
                    </div>
                </StyledInputWrapper>
            </StyledFooter>
        </StyledMain>
    )
}

export default Main
