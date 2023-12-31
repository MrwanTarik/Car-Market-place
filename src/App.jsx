import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Homepage from "./pages/Homepage";
import { FilterProvider } from "./context/filterContext/FilterContext";
import Footer from "./components/layout/Footer";
import DealershipOwners from "./pages/DealershipOwners";
import DealershipDetails from "./components/dealership/DealershipDetails";
import Faq from "./pages/Faq";
import Favourite from "./pages/Favourite";
import NewAdvertisement from "./pages/NewAdvertisement";
import CarDetails from "./pages/CarDetails";
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
          <Route path="/help" element={<Faq />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/new-advertisement" element={<NewAdvertisement />} />
          <Route path="/car-details" element={<CarDetails />} />
        </Routes>
        <Footer />
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
