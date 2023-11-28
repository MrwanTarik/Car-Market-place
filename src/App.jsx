import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Homepage from "./pages/Homepage";
import CarDetails from "./components/cars/CarDetails";
import { FilterProvider } from "./context/filterContext/FilterContext";
import Footer from "./components/layout/Footer";
import DealershipOwners from "./pages/DealershipOwners";
import DealershipDetails from "./components/dealership/DealershipDetails";
import Faq from "./pages/Faq";
import Favourite from "./pages/Favourite";
function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dealership-owners" element={<DealershipOwners />} />
          <Route
            path="/dealership/:dealershipId"
            element={<DealershipDetails />}
          />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/help" element={<Faq />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
        <Footer />
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
