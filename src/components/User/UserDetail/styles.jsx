import styled from 'styled-components'

export const StyledUserDetail = styled.aside`
    display: ${p => (p.displayShow ? `block` : 'none')};
    z-index: 2;
    position: fixed;
    background: ${p => p.theme.black};
    inline-size: 18.65rem;
    inset-inline-end: 15rem;
    ${p =>
        p.insetBlockStart !== null &&
        `inset-block-start: ${p.insetBlockStart}rem`};
    ${p =>
        p.insetBlockEnd !== null && `inset-block-end: ${p.insetBlockEnd}rem`};
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: context-menu;
    min-block-size: 23.5rem;
    & header {
        & .user__detail-header-banner {
            background-color: ${p => p.theme.colorRole(p.roleUser)};
            block-size: 3.75rem;
        }
        & .user__detail-header-info {
            padding-inline-start: 1rem;
            padding-inline-end: 1rem;
            & .user__detail-wrapper-img {
                inline-size: 5.5rem;
                block-size: 5.5rem;
                border: 0.4rem solid ${p => p.theme.black};
                border-radius: 50%;
                box-sizing: border-box;
                margin-block-start: -2.75rem;
            }
            & h1 {
                padding-block-start: 0.3rem;
                padding-block-start: 0.3rem;
            }
            & hr {
                margin: 0;
                color: ${p => p.theme.black1};
            }
            & h1,
            span {
                font: ${p => p.theme.headline3};
            }
            & span {
                color: ${p => p.theme.grey2};
            }
        }
    }
    & section {
        padding: 1rem;
        padding-block-start: 0.4rem;
        & h2 {
            font: ${p => p.theme.body1Bold};
            font-size: 0.85rem;
            color: ${p => p.theme.gray4};
            margin: 0;
            margin-block-end: 0.3rem;
        }
        & h2:nth-of-type(2) {
            margin-block-start: 1rem;
        }
        & .user__detail-roles {
            display: flex;
            flex-wrap: wrap;
            & span {
                font: ${p => p.theme.captionBold};
                background-color: ${p => p.theme.black1};
                color: ${p => p.theme.white};
                padding-inline-start: 1.5rem;
                padding-inline-end: 0.5rem;
                padding-block-start: 0.2rem;
                padding-block-end: 0.2rem;
                border-radius: 0.27rem;
                position: relative;
                :before {
                    position: absolute;
                    content: '';
                    inline-size: 0.85rem;
                    block-size: 0.85rem;
                    inset-inline-start: 0.5rem;
                    inset-block-start: 0.3rem;
                    border-radius: 50%;
                    background-color: ${p => p.theme.colorRole(p.roleUser)};
                }
            }
        }
        & .user__detail-note-wrapper {
            background-color: ${p => p.theme.black};
            block-size: 2.3rem;
            border-radius: 0.3rem;
            overflow: hidden;
            cursor: text;
            input {
                box-sizing: border-box;
                padding: 0;
                font: ${p => p.theme.captionRegular};
                color: ${p => p.theme.white};
                background-color: transparent;
                border: 0;
                outline: none;
                inline-size: 100%;
                padding-inline-start: 0.3rem;
                padding-inline-end: 0.3rem;
                ::placeholder {
                    color: ${p => p.theme.grey2};
                }
            }
        }
    }
    & footer {
        background: ${p => p.theme.black2};
        margin-inline-start: 1rem;
        margin-inline-end: 1rem;
        margin-block-end: 1rem;
        block-size: 2.5rem;
        overflow: hidden;
        border-radius: 0.2rem;
        input {
            color: ${p => p.theme.white};
            background-color: transparent;
            box-sizing: border-box;
            inline-size: 100%;
            padding-inline-start: 0.8rem;
            padding-inline-end: 0.8rem;
            block-size: inherit;
            border: 0;
            ::placeholder {
                color: ${p => p.theme.grey2};
            }
        }
    }
    @media ${p => p.theme.breakPointsDevice.tablet} {
        inline-size: calc(100vw - 15rem);
    }
`
