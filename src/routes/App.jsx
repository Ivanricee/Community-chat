import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Loader } from '../components/Loader'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Layout } from '../components/Layout'
// import Channel from '../components/Channel'
const Channel = React.lazy(() => import('../components/Channel'))
const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: import.meta.env.VITE_APOLO_API_URL,
  }),
})
export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/:server" element={<Home />}>
                <Route index element={<Channel />} />
                <Route
                  path=":channel"
                  element={
                    <Suspense
                      fallback={
                        <Loader justifyContent="center" alignItems="center" />
                      }
                    >
                      <Channel />
                    </Suspense>
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  )
}
