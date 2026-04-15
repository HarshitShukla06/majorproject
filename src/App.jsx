import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import axios from "axios";

import MainLayout from "./layouts/MainLayouts";
import AIChatbot from "./components/AIChatbot";

// Pages
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import AuthPage from "./pages/AuthPage";
import PlanTrip from "./pages/PlanTrip";
import Dashboard from "./pages/Dashboard";

// 👉 Axios Base URL (IMPORTANT)
axios.defaults.baseURL = "http://localhost:5000";

// 🔒 Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <Navigate to="/auth" />;

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Layout Wrapper */}
          <Route element={<MainLayout />}>

            {/* AUTH (Public) */}
            <Route path="/auth" element={<AuthPage />} />

            {/* HOME */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            {/* DESTINATIONS */}
            <Route
              path="/destinations"
              element={
                <ProtectedRoute>
                  <Destinations />
                </ProtectedRoute>
              }
            />

            <Route
              path="/destinations/:id"
              element={
                <ProtectedRoute>
                  <DestinationDetails />
                </ProtectedRoute>
              }
            />

            {/* PLAN TRIP */}
            <Route
              path="/plantrip"
              element={
                <ProtectedRoute>
                  <PlanTrip />
                </ProtectedRoute>
              }
            />

            {/* BACKUP ROUTE */}
            <Route
              path="/itinerary"
              element={
                <ProtectedRoute>
                  <PlanTrip />
                </ProtectedRoute>
              }
            />

            {/* OTHER PAGES */}
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />

            <Route
              path="/favourites"
              element={
                <ProtectedRoute>
                  <Favourites />
                </ProtectedRoute>
              }
            />

            {/* ✅ DASHBOARD (NEW) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

          </Route>

        </Routes>

        {/* AI CHATBOT (Global Component) */}
        <AIChatbot />

      </Router>
    </AuthProvider>
  );
}

export default App;