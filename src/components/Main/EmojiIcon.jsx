import React, { useState } from 'react'
import { throttle } from '../../utils'

export const EmojiIcon = () => {
  const [urlEmoji, setUrlEmoji] = useState(
    'https://res.cloudinary.com/ivanrice-c/image/upload/v1642795216/discord-clone/fonts/emojis/05_Laugh_rzq4mh.png'
  )
  const setEmoji = e => {
    e.stopPropagation()
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
    const randomEmoji = () => {
      const rand = Math.floor(Math.random() * emojis.length)
      if (emojis[rand] === urlEmoji) return randomEmoji()
      return rand
    }
    if (e.target === e.currentTarget)
      setUrlEmoji(`${rootPath}${emojis[randomEmoji()]}`)
  }

  return (
    <i
      className="ico-Grin"
      onMouseOverCapture={throttle(setEmoji, 400)}
      onFocusCapture={throttle(setEmoji, 400)}
    >
      <img src={urlEmoji} alt="emoji" />
    </i>
  )
}
