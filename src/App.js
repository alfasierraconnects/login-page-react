import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthContextProvider } from "./utils/AuthContext";
import ErrorModal from "./components/ErrorModal";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/error" element={<ErrorModal />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
