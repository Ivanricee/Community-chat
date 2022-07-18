import React from 'react'
import { Loader } from '../Loader'

const styleTextMarks = (texto, dataUsers) => {
    const regex = /@.[a-zA-Z\u00C0-\u00FF\s]{1,32}/gi
    const usersRaw = texto.match(regex)
    if (usersRaw !== null) {
        let usersFiltered = []
        // let regexFilter = ""
        if (dataUsers) {
            for (let j = 0; j < usersRaw.length; j += 1) {
                const matchedusersk = dataUsers.getUsers.filter(user => {
                    // eslint-disable-next-line prefer-regex-literals
                    const regexMatch = new RegExp(`@${user.name}`, 'i').test(
                        usersRaw[j]
                    )
                    return regexMatch
                })

                if (matchedusersk.length === 1) {
                    usersFiltered = [
                        ...usersFiltered,
                        `@${matchedusersk[0].name}`,
                    ]
                }
            }

            // Nuevo regex para los usuarios encontrados
            const regexFilter = usersFiltered.join('|')
            const regexDos = new RegExp(`^${regexFilter}`, 'gi')
            const usersInText = texto.match(regexDos)
            const textArraySplit = texto.split(regexDos)

            return textArraySplit.map((mark, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={i}>
                    {mark}
                    {i + 1 <= usersInText.length && (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={i}>{usersInText[i]}</span>
                    )}
                </React.Fragment>
            ))
        }
    } else {
        return texto
    }

    return <Loader justifyContent="start" alignItems="center" />
}
export const Text = ({ texto, dataUsers, nombre }) => {
    return (
        <div className={`comment__message${nombre ? ' reply' : ''}`}>
            <div>
                {nombre && <p>{nombre}</p>}
                {styleTextMarks(texto, dataUsers)}
            </div>
        </div>
    )
}
