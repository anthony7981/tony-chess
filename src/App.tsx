import { Routes, Route } from "react-router-dom"
import GamePage from "./pages/gamePage"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
    </Routes>
  )
}

export default App
