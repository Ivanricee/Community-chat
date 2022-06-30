import { createPortal } from 'react-dom'

export const Portal = ({ children }) => {
    const portal = createPortal(children, window.app)
    return portal
}
