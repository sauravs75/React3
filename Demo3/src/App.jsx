import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import Login_Signup from "./Login_Signup";
import Quiz from './Quiz';
import Categories from './pages/Categories';
import Leaderboard from './pages/Leaderboard';
import Progress from './pages/Progress';


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_Signup />} />
        <Route path="/Quiz" element={<Quiz/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/progress" element={<Progress/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
