import { createContext } from "react";
import { useState } from "react";
const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [checkedBrand, setCheckedBrand] = useState(false);
  const [checkedModel, setCheckedModel] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [checkedCity, setCheckedCity] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [checkedBanType, setCheckedBanType] = useState(false);
  const [selectedYearManufactured, setSelectedYearManufactured] = useState("");
  const [selectedMaxYearManufactured, setSelectedMaxYearManufactured] =
    useState("");
  const [checkedColor, setCheckedColor] = useState(false);
  const [checkedFuelType, setCheckedFuelType] = useState(false);
  const [checkedGear, setCheckedGear] = useState(false);
  const [checkedGearBox, setCheckedGearBox] = useState(false);
  const [selectedVolumeMin, setSelectedVolumeMin] = useState("");
  const [selectedVolumeMax, setSelectedVolumeMax] = useState("");
  const [minPower, setMinPower] = useState("");
  const [maxPower, setMaxPower] = useState("");
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [selectedCarType, setSelectedCarType] = useState("");
  const [checkedOwnersNumber, setCheckedOwnersNumber] = useState(false);
  const [checkedSeatsNumber, setCheckedSeatsNumber] = useState(false);
  const [checkedMarketAssembled, setCheckedMarketAssembled] = useState(false);
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
        checkedBrand,
        setCheckedBrand,
        checkedModel,
        setCheckedModel,
        selectedType,
        setSelectedType,
        checkedCity,
        setCheckedCity,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedCurrency,
        setSelectedCurrency,
        checkedBanType,
        setCheckedBanType,
        selectedYearManufactured,
        setSelectedYearManufactured,
        selectedMaxYearManufactured,
        setSelectedMaxYearManufactured,
        checkedColor,
        setCheckedColor,
        checkedFuelType,
        setCheckedFuelType,
        checkedGear,
        setCheckedGear,
        checkedGearBox,
        setCheckedGearBox,
        selectedVolumeMin,
        setSelectedVolumeMin,
        selectedVolumeMax,
        setSelectedVolumeMax,
        minPower,
        setMinPower,
        maxPower,
        setMaxPower,
        minMileage,
        setMinMileage,
        maxMileage,
        setMaxMileage,
        selectedCarType,
        setSelectedCarType,
        checkedOwnersNumber,
        setCheckedOwnersNumber,
        checkedSeatsNumber,
        setCheckedSeatsNumber,
        checkedMarketAssembled,
        setCheckedMarketAssembled,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
