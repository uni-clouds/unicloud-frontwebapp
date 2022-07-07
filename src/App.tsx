import MainRoutes from './routes'
import { ReactQueryDevtools } from 'react-query/devtools'
const App: React.FC = () => {
  return (
    <>
      <MainRoutes />
      <ReactQueryDevtools />
    </>
  )
}

export default App
