import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { Home } from "./pages/dashboard";
import { SignIn } from "./pages/auth";
function App() {
  return (
   

    <Routes>

      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      {/* <Route path="/" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes> 

  );
}

export default App;
