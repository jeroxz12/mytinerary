import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home.jsx";
import Cities from "./pages/Cities/Cities.jsx";
import Footer from "./components/Footer";
import Hotels from "./pages/Hotels/Hotels";
import CityDetail from "./pages/CityDetail/";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/cities/:id" element={<CityDetail />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
