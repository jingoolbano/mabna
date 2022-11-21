import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
