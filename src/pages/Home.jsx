import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Main from '../components/Main'
import User from '../components/User'

export const Home = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { channel, server } = params
    useEffect(() => {
        if (channel === undefined) navigate('1')
    }, [channel, navigate, server])

    return (
        <>
            <Helmet>
                <title> Home - Template</title>
                <meta name="description" content="Home del template" />
            </Helmet>
            <Outlet />
            <Main params={{ server, channel }} />
            <User />
            {/*
                 mientras obtiene datos (servers con data) con redux thunk
                 cargar animacion de inicio

                 con los datos del primer server obtener:
                 ruta
                 reedirigir a esa ruta
                 obtener datos de la ruta y enviar por props a:

                 channel
                 main
                 usuarios.

                  Al dar clic en un server llama un action creator
                  y se actualiza el store
                  por lo tanto los componentes channel main user
                */}
        </>
    )
}
