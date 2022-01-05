export const setRedBullet = contenido => {
  let content = ''
  let inlineSize = 1
  let translateX = 0
  let display = 'none'

  if (contenido !== '0' && contenido.length <= 3) {
    content = contenido
    inlineSize = contenido.length * 0.5 + 0.5
    translateX = contenido.length * 0.5 - 0.5
    display = ''
  }
  return { content, inlineSize, translateX, display }
}
