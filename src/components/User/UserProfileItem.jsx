import React, { useState, useCallback } from 'react'
import { ImgContainer } from '../ImgContainer'

export const UserProfileItem = ({
    className,
    StyledUserDetail,
    user,
    userRoleName,
}) => {
    const [insetBlockStart, setInsetBlockStart] = useState({
        blockStart: 0,
        showDetail: false,
    })

    const handleUserItemClick = useCallback(
        e => {
            const minBlockSize = 376
            const itemTopDistance = e.target.getBoundingClientRect().top
            const totalBlockSize = minBlockSize + itemTopDistance
            const { body } = document
            const html = document.documentElement
            let detailData = {}
            const documentBlockSize = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            )

            if (totalBlockSize > documentBlockSize) {
                detailData = { blockStart: 0, showDetail: true }
            } else {
                detailData = {
                    blockStart: itemTopDistance / 16,
                    showDetail: true,
                }
            }
            setInsetBlockStart({
                ...insetBlockStart,
                ...detailData,
            })
        },
        [insetBlockStart]
    )

    return (
        <div
            hidden
            role="button"
            tabIndex={0}
            className={className}
            onKeyDown={e => {
                handleUserItemClick(e)
            }}
            onFocus={e => {
                handleUserItemClick(e)
            }}
            onBlur={() => {
                const detailData = {
                    blockStart: 0,
                    showDetail: false,
                }
                if (insetBlockStart.showDetail === true)
                    setInsetBlockStart({ ...insetBlockStart, ...detailData })
            }}
        >
            <StyledUserDetail
                role={user.role}
                displayShow={insetBlockStart.showDetail}
                insetBlockStart={insetBlockStart.blockStart}
                img={user.img}
                userName={user.name}
                userHash={user.hash}
                userRoleName={userRoleName}
            />

            <div className="user__image-wrapper" tabIndex="-1">
                <ImgContainer
                    img={user.img}
                    greenBullet="1"
                    content=""
                    inlineSize={0.58}
                    blockSize={0.58}
                    borderColor="black2"
                />
            </div>
            <span>{user.name}</span>
        </div>
    )
}
