import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import HouseholdDashboard from "./pages/HouseholdDashboard";
import CollectorDashboard from "./pages/CollectorDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecyclingDashboard from "./pages/RecyclingDashboard";
import About from "./pages/About";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/collectordashboard" element={<CollectorDashboard />} />
        <Route path="/housedashboard" element={<HouseholdDashboard />} />
        <Route path="/recycling-dashboard" element={<RecyclingDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
