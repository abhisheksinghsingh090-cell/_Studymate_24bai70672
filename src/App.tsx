import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Materials from "./pages/Materials";
import MaterialDetail from "./pages/MaterialDetail";
import Upload from "./pages/Upload";
import Quiz from "./pages/Quiz";
import QuizAttempt from "./pages/QuizAttempt";
import QuizResult from "./pages/QuizResult";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function ProtectedLayout() {
  const user = localStorage.getItem("sm_user");
  return user ? <Outlet/> : <Navigate to="/login" replace/>;
}
export default function App() {
  return <AppProvider><Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route element={<ProtectedLayout/>}>
      <Route element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/materials" element={<Materials/>}/>
        <Route path="/materials/:id" element={<MaterialDetail/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quiz/attempt" element={<QuizAttempt/>}/>
        <Route path="/quiz/result" element={<QuizResult/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Routes></AppProvider>;
}
