/**
 * Return
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
// Debounce
export const debounce = (callback, delay = 100) => {
  let timerId
  return event => {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(callback, delay, event)
  }
}
// Throtle
export const throttle = (callback, interval) => {
  let shouldFire = true
  return () => {
    if (shouldFire) {
      callback()
      shouldFire = false
      setTimeout(() => {
        shouldFire = true
      }, interval)
    }
  }
}

function getAspectRatioHeight(width) {
  const aspectRatio = 16 / 9
  const height = width / aspectRatio
  return height
}
function getAspectRatioWidth(height) {
  const aspectRatio = 16 / 9
  const width = height * aspectRatio
  return width
}
// Obtiene los rows que se van generando usando total items y columnas
function getRowsCount(totalItems, columns) {
  const rowsCount = totalItems / columns
  if (totalItems % columns !== 0) {
    return Math.trunc(rowsCount) + 1
  }
  return rowsCount
}
/*
 * Crea una medida exacta (inline size) de un item, para que se adapte en a su contenedor
 * La medida del item esta basada en un ratio aspect de 16/9
 * Solo ofrece un inline size final, usar flex box para ver resultados
 * Genera filas y columnas que se puedan adaptar a los limites tanto de height como width
 * Recibe como parametros:
 * totalItems: cantidad total de items dentro del grid
 * containerInline, containerBlock: width y height del contenedor
 * No toma en cuenta: padding, margin o border del item, usar border-box
 * return Object data:
 * itemInlineSize: medida exacta del item para hacer adaptarse a su container
 */
export const renderGrid = (totalItems, containerInline, containerBlock) => {
  let preItemBlockSize = 0
  let preItemInlineSize = 0
  let itemsBlockSize = 0
  let preRowsCount = 0
  let data = {}
  for (let i = totalItems; i > 0; i -= 1) {
    let totalItemsBlockSize = 0
    preItemInlineSize = containerInline / i
    preItemBlockSize = getAspectRatioHeight(preItemInlineSize)
    preRowsCount = getRowsCount(totalItems, i)
    totalItemsBlockSize = preItemBlockSize * preRowsCount
    if (totalItemsBlockSize < containerBlock) {
      itemsBlockSize = totalItemsBlockSize
      data = {
        itemInlineSize: preItemInlineSize,
        preItemBlockSize,
        itemsBlockSize,
        columns: i,
        rows: preRowsCount,
      }
    } else {
      const previousData = data?.preItemBlockSize || 0
      const prevTotalBlockSize = itemsBlockSize + previousData
      let columns = data.columns || i
      let rows = data.rows || preRowsCount

      const noPreviousData = prevTotalBlockSize === 0
      const equalRows = data.rows === preRowsCount

      if (equalRows || noPreviousData) {
        preItemBlockSize = containerBlock / rows
        preItemInlineSize = getAspectRatioWidth(preItemBlockSize)
        data = {
          ...data,
          itemInlineSize: preItemInlineSize,
          preItemBlockSize,
          columns,
          rows,
        }
      }
      if (prevTotalBlockSize < containerBlock && prevTotalBlockSize !== 0) {
        columns -= 1
        rows += 1

        if (columns === 1) {
          const preSingleColumnHeightFit = containerBlock / totalItems
          const preSingleItemInlineSize = getAspectRatioWidth(
            preSingleColumnHeightFit
          )
          const fitSingleItemInline =
            preSingleItemInlineSize * 2 > containerInline

          if (fitSingleItemInline) {
            preItemInlineSize = preSingleItemInlineSize
          } else {
            preItemInlineSize = data.itemInlineSize
          }
        } else {
          const containerItemBlockSize = containerBlock / rows
          preItemInlineSize = getAspectRatioWidth(containerItemBlockSize)
        }
        data = { ...data, itemInlineSize: preItemInlineSize, columns, rows }
      }
      break
    }
  }
  return data
}

/*
 * Fullscreen API support
 */
export const detectFullScreen = () => {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  )
}
export const getFullscreen = element => {
  if (element.requestFullscreen) {
    return element.requestFullscreen() // W3C spec
  }
  if (element.mozRequestFullScreen) {
    return element.mozRequestFullScreen() // Firefox
  }
  if (element.webkitRequestFullscreen) {
    return element.webkitRequestFullscreen() // Safari
  }
  if (element.msRequestFullscreen) {
    return element.msRequestFullscreen() // IE/Edge
  }
  throw new Error('requestFullscreen is not supported by this browser')
}
export const deactivateFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else {
    throw new Error('exitFullscreen is not supported by this browser')
  }
}

/*
 * get Token from twilio
 * crear token con nombre de la sala y las keys de twilio
 */

export const getTwilioToken = async (identity, room) => {
  const data = await fetch(process.env.REACT_TWILIO_VIDEO, {
    method: 'POST',
    body: JSON.stringify({
      identity,
      room,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
  const { token } = data
  return token
  // request: conectarse a video a traves de nombre de la sala y token
  // const room =
  // response: obj Room, participant list (change with time)
  // const participants =
}
