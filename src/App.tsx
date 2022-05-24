import { ToastContainer } from 'react-toastify'
import MainRoutes from './routes'

import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <main>
      <MainRoutes />
      <ToastContainer />
    </main>
  )
}

export default App
