import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css'
import Admin from "./routes/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="min-h-screen ">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/about" element={<About/>} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App
