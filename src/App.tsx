import { ReactQueryDevtools } from 'react-query/devtools'
import MainRoutes from './routes'

const App: React.FC = () => {
  return (
    <>
      <MainRoutes />
      <ReactQueryDevtools/>
    </>
  )
}

export default App
