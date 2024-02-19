import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./component/Gallery/Gallery";
import Navbar from "./component/Navbar/Navbar";
import PrivateRoute from "./component/PrivateRoute";
import AddStudents from "./component/Profile/AddStudents";
import Post from "./component/Profile/Post";
import PostNotice from "./component/Profile/PostNotice";
import UpdateStudents from "./component/Profile/UpdateStudents";
import PublicRoute from "./component/PublicRoute";
import { AuthProvider } from "./context/AuthContext";
import AllStudents from "./pages/AllStudents";
import Faculties from "./pages/Faculties";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import PageLibrary from "./pages/PageLibrary";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/post" element={<PrivateRoute><Post /></PrivateRoute>}></Route>
          <Route path="/postNotice" element={<PrivateRoute><PostNotice /></PrivateRoute>}></Route>
          <Route path="/addstudents" element={<PrivateRoute><AddStudents /></PrivateRoute>}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/library" element={<PageLibrary />}></Route>
          <Route path="/faculty" element={<Faculties />}></Route>
          <Route path="/students" element={<AllStudents />}></Route>
          <Route path="/updatestudent/:id" element={<UpdateStudents />}></Route>
          <Route path="/singlearticle/:id" element={<Singlepage />}></Route>
          <Route path="/signin" element={<PublicRoute> <Signin /> </PublicRoute>} /> 
          <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
