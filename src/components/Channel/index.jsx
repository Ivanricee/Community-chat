import React, { useRef, useState } from 'react'
import {
    StyledChannel,
    StyledHeader,
    StyledChannelDetails,
    StyledDetails,
    StyledNavlink,
    StyledFooter,
} from './styles'
import { setRedBullet } from '../../utils'
import { ImgContainer } from '../ImgContainer'

import ivnriceLogo from '../../assets/ivnrice_logo.png'

const server = {
    id: 1,
    server: 1,
    title: 'Healthy Gamer',
    channel: {
        details: [
            {
                title: '- Welcome and rules',
                id: 1,
                summary: [
                    {
                        id: 1,
                        title: 'extra-roles',
                        to: '/ivnr/1',
                        notification: '0',
                    },
                ],
            },
            {
                title: '- important',
                id: 2,
                summary: [
                    {
                        id: 2,
                        title: 'announcements',
                        to: '/ivnr/2',
                        notification: '0',
                    },
                    {
                        id: 3,
                        title: 'calendar',
                        to: '/ivnr/3',
                        notification: '9',
                    },
                ],
            },
            {
                title: '- resources',
                id: 3,
                summary: [
                    {
                        id: 4,
                        title: 'therapy_harassment',
                        to: '/ivnr/4',
                        notification: '0',
                    },
                    {
                        id: 5,
                        title: 'calendar',
                        to: '/ivnr/5',
                        notification: '0',
                    },
                ],
            },
            {
                title: '- hg services',
                id: 4,
                summary: [
                    {
                        id: 6,
                        title: 'coaching_questions',
                        to: '/ivnr/6',
                        notification: '789',
                    },
                    {
                        id: 7,
                        title: 'guide_help-desk',
                        to: '/ivnr/7',
                        notification: '0',
                    },
                    {
                        id: 8,
                        title: 'guide_suggestions',
                        to: '/ivnr/8',
                        notification: '24',
                    },
                    {
                        id: 9,
                        title: 'guide_bug-reports',
                        to: '/ivnr/9',
                        notification: '0',
                    },
                ],
            },
            {
                title: '- hg content',
                id: 5,
                summary: [
                    {
                        id: 10,
                        title: 'guide_discussion',
                        to: '/ivnr/10',
                        notification: '0',
                    },
                    {
                        id: 11,
                        title: 'content_discussion',
                        to: '/ivnr/11',
                        notification: '0',
                    },
                ],
            },
            {
                title: '- growth',
                id: 6,
                summary: [
                    {
                        id: 12,
                        title: 'improvement_general',
                        to: '/ivnr/12',
                        notification: '0',
                    },
                    {
                        id: 13,
                        title: 'pogchamp',
                        to: '/ivnr/13',
                        notification: '0',
                    },
                    {
                        id: 14,
                        title: 'life_purpose_and_dharma',
                        to: '/ivnr/14',
                        notification: '957',
                    },
                    {
                        id: 15,
                        title: 'study_of_self',
                        to: '/ivnr/15',
                        notification: '0',
                    },
                    {
                        id: 16,
                        title: 'careers',
                        to: '/ivnr/16',
                        notification: '0',
                    },
                    {
                        id: 17,
                        title: 'student_life',
                        to: '/ivnr/17',
                        notification: '2',
                    },
                    {
                        id: 18,
                        title: 'meditation_and_yoga',
                        to: '/ivnr/18',
                        notification: '1',
                    },
                    {
                        id: 19,
                        title: 'physical_health',
                        to: '/ivnr/19',
                        notification: '15',
                    },
                ],
            },
        ],
    },
}

const Channel = () => {
    const channelDetailsRef = useRef(null)
    const [detailListPadding, setDetailListPadding] = useState(0)

    const handleResize = () => {
        const { scrollHeight } = channelDetailsRef.current
        const { clientHeight } = channelDetailsRef.current
        if (scrollHeight > clientHeight) {
            setDetailListPadding(1)
        } else {
            setDetailListPadding(0)
        }
    }
    const greenBullet = setRedBullet('1')
    return (
        <StyledChannel aria-label="channel">
            <StyledHeader>{server.title}</StyledHeader>
            <StyledChannelDetails
                aria-label="channel-details"
                paddingLeft={detailListPadding}
                ref={channelDetailsRef}
            >
                <div>
                    {server.channel.details.map(detail => (
                        <StyledDetails
                            open
                            key={detail.id}
                            onToggle={handleResize}
                        >
                            <summary id="summary">{detail.title}</summary>
                            <nav aria-label={detail.title}>
                                <ul>
                                    {detail.summary.map(channelItem => {
                                        const redBullet = setRedBullet(
                                            channelItem.notification
                                        )
                                        return (
                                            <li key={channelItem.id}>
                                                <StyledNavlink
                                                    to={channelItem.to}
                                                    className={
                                                        channelItem.notification !==
                                                        '0'
                                                            ? 'notification'
                                                            : ''
                                                    }
                                                    inlinesize={
                                                        redBullet.inlineSize
                                                    }
                                                    color={
                                                        channelItem.notification !==
                                                        '0'
                                                            ? 'true'
                                                            : ''
                                                    }
                                                >
                                                    <span>
                                                        # {channelItem.title}
                                                    </span>
                                                    <span>
                                                        {redBullet.content}
                                                    </span>
                                                </StyledNavlink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </StyledDetails>
                    ))}
                </div>
            </StyledChannelDetails>
            <StyledFooter>
                <div
                    className="footer-perfil-status"
                    aria-label="perfil estatus"
                >
                    <div>
                        <ImgContainer
                            img={ivnriceLogo}
                            alt="perfil de usuario"
                            content=""
                            inlineSize="0.7"
                            blockSize="0.7"
                            greenBullet="1"
                            borderColor="black2"
                            display={greenBullet.display}
                        />
                    </div>
                    <div>
                        <p>ivanrice</p>
                        <p>#5463</p>
                    </div>
                </div>

                <div
                    className="footer-tools"
                    aria-label="tools, audio controls"
                >
                    <div>
                        <i className="ico-mute" />
                    </div>
                    <div>
                        <i className="ico-deafen" />
                    </div>
                    <div>
                        <i className="ico-settings" />
                    </div>
                </div>
            </StyledFooter>
        </StyledChannel>
    )
}

export default Channel
