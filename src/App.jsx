import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Outlet/>
    </div>
  )
}

export default App
