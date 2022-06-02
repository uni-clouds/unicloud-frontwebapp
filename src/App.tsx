import { ToastContainer } from 'react-toastify'
import MainRoutes from './routes'

import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <>
      <MainRoutes />
      <ToastContainer
        style={{
          width: '450px',
          marginBottom: '40px'
        }}
        role='alert'
      />
    </>
  )
}

export default App
