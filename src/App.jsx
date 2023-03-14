import './App.css'
import Aside from './components/Aside/Aside'
import ContactHelper from './components/ContactHelper/ContactHelper'
import ContextProvider from './components/ContextProvider/ContextProvider'

function App() {
  return (
    <div className="App app">
      <ContextProvider>
        <Aside />
        <ContactHelper />
      </ContextProvider>
    </div>
  )
}

export default App
