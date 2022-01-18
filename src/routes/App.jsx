import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '../store'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../components/Layout'
import Channel from '../components/Channel'

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000',
    }),
})

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/:server" element={<Home />}>
                                <Route index element={<Channel />} />
                                <Route path=":channel" element={<Channel />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
    )
}
