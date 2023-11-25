import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Homepage from "./pages/Homepage";
import CarDetails from "./components/cars/CarDetails";
import { FilterProvider } from "./context/filterContext/FilterContext";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
        <Footer />
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
