import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import App from '../App'
const Page404 = lazy(() => import('../pages/Error'))

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'*'} element={<Page404 />} />

        {/* Auth Pages */}
        <Route
          path={`${import.meta.env.PUBLIC_URL}/auth-success`}
          element={<>...</>}
        />
        <Route
          path={`${import.meta.env.PUBLIC_URL}/auth-reset`}
          element={<>...</>}
        />
        <Route
          path={`${import.meta.env.PUBLIC_URL}/auth-register`}
          element={<>...</>}
        />
        <Route
          path={`${import.meta.env.PUBLIC_URL}/auth-login`}
          element={<>...</>}
        />

        {/* Print Pages */}
        <Route
          path={`${import.meta.env.PUBLIC_URL}/invoice-print/:id`}
          element={<>...</>}
        />

        {/* Helper pages */}
        <Route
          path={`${import.meta.env.PUBLIC_URL}/auths/terms`}
          element={<>...</>}
        />
        <Route
          path={`${import.meta.env.PUBLIC_URL}/auths/faq`}
          element={<>...</>}
        />

        <Route
          path={`${import.meta.env.PUBLIC_URL}/invoice-print`}
          element={<>...</>}
        ></Route>

        {/*Error Pages*/}
        <Route
          path={`${import.meta.env.PUBLIC_URL}/errors/504-modern`}
          element={<>...</>}
        ></Route>
        <Route
          path={`${import.meta.env.PUBLIC_URL}/errors/404-modern`}
          element={<Page404 />}
        ></Route>

        {/*Main Routes*/}
        <Route path='' element={<>...</>}></Route>
        <Route element={<>redirect</>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
