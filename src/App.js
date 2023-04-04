import { Outlet } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside/Aside'

function App() {
  return (
    <div className="App app">
      <Aside />
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
