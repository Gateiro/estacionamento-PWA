import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path= './' element={<Login/>} />
        <Route path= './home' element={<Home/>} />
        <Route path= '*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
