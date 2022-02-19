/**
 * Returna
 * content: contenido
 * inlinesize: si es menor de 3 digitos establece una longitud del contenedor
 * translatex: segun crece la longitud el contenido se centra
 * En caso de no necesitar el bullet se usa el display none
 */
export const setBullet = contenido => {
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
