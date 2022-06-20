import { BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './App.css'

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Form from "./routes/Form";
import Home from './routes/Home';
import Details from "./routes/Libros";

import CartState from "./context/cart/CartState";
import SessionState from "./context/session/SessionState";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./routes/Admin";


function App() {

  return (
    <div className="App">
      <Router>
        <SessionState>
          <CartState>
            <Navbar />
            <main className="min-h-screen ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/form/:method" element={<Form />} />
                  <Route path="/admin/form/:method/:isbn" element={<Form />} />
                </Route>
                <Route path="/libro" element={<Home />} />
                <Route path="/libros/:isbn" element={<Details />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </CartState>
        </SessionState>
      </Router>
    </div>
  );
}

export default App
