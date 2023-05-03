import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home/Home.js";
import Cities from "./pages/Cities/Cities.js";
import City from "./pages/City";
import Footer from "./components/Footer";
import Hotels from "./pages/Hotels/Hotels";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cities" element={<Cities  />}></Route>
        <Route path="/city/:id" element={<City  />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
