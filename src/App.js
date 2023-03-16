import { Layout } from './components/layout'
import { Meteo } from './components/Meteo'
import './main.css'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Layout />
        <Meteo />
      </QueryClientProvider>
    </div>
  )
}

export default App
