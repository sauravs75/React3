import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import Login_Signup from "./Login_Signup";

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
