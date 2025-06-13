import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import Login_Signup from "./Login_Signup";
import Quiz from './Quiz';


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_Signup />} />
        <Route path="/Quiz" element={<Quiz/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
