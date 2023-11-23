import { createContext } from "react";
import { useState } from "react";
const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [newAds, setNewAds] = useState(1425);

  const [moreFilters, setMoreFilters] = useState(false);
  function handleMoreFilters() {
    setMoreFilters(!moreFilters);
  }

  const [paymentOptions, setPaymentOptions] = useState({
    credit: false,
    barter: false,
    noPunctuation: false,
    notColored: false,
    accidentalCars: false,
    alloyWheels: false,
    usa: false,
    hatch: false,
    rainSensor: false,
    centralLocking: false,
    parkingRadar: false,
    airConditioning: false,
    seatHeating: false,
    leatherSalon: false,
    xenonLamps: false,
    rearViewCamera: false,
    sideCurtains: false,
    rainSeatVentilationSensor: false,
  });
  return (
    <FilterContext.Provider
      value={{
        newAds,
        moreFilters,
        handleMoreFilters,
        setPaymentOptions,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
