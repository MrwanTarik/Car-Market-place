import { useRef,useEffect, useState } from "react";
import axios from "axios";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function YearManufacturer() {
  const { selectedYearManufactured, setSelectedYearManufactured } = useContext(FilterContext);
  const [years, setYears] = useState([]);
  const detailsRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedYearManufactured(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  // get brands
  useEffect(() => {
    async function getVehicleYears() {
      try {
        const response = await axios.get("http://localhost:8000/api/vehicle-years");
        setYears(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getVehicleYears();
  }, []);

  return (
    <div className="h-full">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-5 py-4 bg-white border-none rounded-lg shadow-md btn shadow-input">
          <div>
            {selectedYearManufactured && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">Year</p>
            )}
            <p className="font-primary text-[16px] font-normal">
              {selectedYearManufactured || "Year"}
            </p>
          </div>
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex justify-start w-full mt-2 rounded-none rounded-l-lg">
          {years.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default YearManufacturer;
