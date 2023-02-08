// 420p 기본 앱 파일
import { Provider as ReduxProvider } from 'react-redux'
import ErrorMessageTest from './pages/ErrorMessageTest'
import FetchTest from './pages/FetchTest'
import LoadingTest from './pages/LoadingTest'
import LoggerTest from './pages/LoggerTest'
import { useStore } from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <FetchTest />
      <ErrorMessageTest />
      <LoadingTest />
      <LoggerTest />
    </ReduxProvider>
  )
}
