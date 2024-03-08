import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function Gear() {
  const [gears, setGears] = useState([]);
  const { checkedGear, setCheckedGear, setCheckedGearIds } =
    useContext(FilterContext);
  const detailsRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;
    setCheckedGear((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedGearIds((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((item) => item !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });
  };
  useEffect(() => {
    async function getGears() {
      try {
        const response = await axios.get("https://kibcar.com/api/gears");
        setGears(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getGears();
  }, []);
  const selectedOptions = Object.keys(checkedGear).filter(
    (item) => checkedGear[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Gear" : selectedOptions.join(", ");

  return (
    <div className="h-full">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-5 py-4 bg-white border-none rounded-lg shadow-md cursor-pointer btn shadow-input">
          <div>
            {checkedGear && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Gear
              </p>
            )}
            <p className="font-primary text-[16px] font-normal">
              {summaryText}
            </p>
          </div>

          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {gears.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={checkedGear[item.name] || false}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 form-checkbox accent-red"
                />
                <span className="ml-2 text-secondary font-primary text-[15px]">
                  {item.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Gear;
