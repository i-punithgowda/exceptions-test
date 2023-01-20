import React,{ useState, Suspense, lazy } from "react"
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import UserProfile from "./components/Participant/UserProfile";
import Error404 from "./Error404";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Loading from "./Loading";
import WorkInProgress from "./components/WorkInProgress";
const LandingPage=lazy(()=>import("./components/LandingPage/LandingPage"))

function App() {
  const [auth, setAuth] = useState(false);


  return (
    
    <div className="App">
    
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<Loading />}>
        <LandingPage />
        </Suspense>} />
        {/*
      <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
      */}
        <Route exact path="/login" element={<WorkInProgress />} />
        <Route exact path="/register" element={<WorkInProgress />} />
        <Route
          exact
          path="/user/profile"
          element={
            <ProtectedRoute isSignedIn={auth}>
              <UserProfile />
            </ProtectedRoute>
          }
        />

      

      

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
