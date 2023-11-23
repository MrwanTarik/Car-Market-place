import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Homepage from "./pages/Homepage";
import { FilterProvider } from "./context/filterContext/FilterContext";

function App() {
  return (
    <FilterProvider>
      <Router>
        <Nav />
        <Homepage />
      </Router>
    </FilterProvider>
  );
}

export default App;
