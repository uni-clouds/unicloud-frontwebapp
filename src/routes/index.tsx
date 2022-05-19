import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import AuthPage from '../pages/Auth'

export default function MainRoutes() {
  const Page404 = lazy(() => import('../pages/Error'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route
          path='error'
          element={
            <Suspense fallback={<>...</>}>
              <Page404 />
            </Suspense>
          }
        />

        <Route path='auth' element={<AuthPage />} />

        {/*header routes */}
        <Route
          path='terms'
          element={
            <Suspense fallback={<>...</>}>
              <Page404 />
            </Suspense>
          }
        />
        <Route
          path='help'
          element={
            <Suspense fallback={<>...</>}>
              <Page404 />
            </Suspense>
          }
        />
        <Route
          path='policitys'
          element={
            <Suspense fallback={<>...</>}>
              <Page404 />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
