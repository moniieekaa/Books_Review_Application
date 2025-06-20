import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "./Auth/Pages/AuthPage";
import PrivateRoutes from "./routing/PrivateRoutes";
import { UserContext } from "../src/context/UserContext";
import { useContext } from "react";
import BookLottiePage from "./BookLottiePage";

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/book-lottie" element={<BookLottiePage />} />
          {user ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
