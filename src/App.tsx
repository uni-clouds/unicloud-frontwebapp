import { ToastContainer } from 'react-toastify'
import MainRoutes from './routes'

import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <main>
      <MainRoutes />
      <ToastContainer style={{ width: '450px' }} role='alert' />
    </main>
  )
}

export default App
