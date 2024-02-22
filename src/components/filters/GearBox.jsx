import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function GearBox() {
  const [gearBoxs, setGearBoxs] = useState([]);
  const { checkedGearBox, setCheckedGearBox, setCheckedGearBoxIds } = useContext(FilterContext);
  const detailsRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;

    setCheckedGearBox((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));

    setCheckedGearBoxIds((prevItems) => ([...prevItems, itemId]));

  };
  useEffect(() => {
    async function getGearBoxs() {
      try {
        const response = await axios.get("http://localhost:8000/api/vehicle-transmissions");
        setGearBoxs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getGearBoxs();
  }, []);
  const selectedOptions = Object.keys(checkedGearBox).filter(
    (item) => checkedGearBox[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Gear Box" : selectedOptions.join(", ");

  return (
    <div className="h-full">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-5 py-4 bg-white border-none rounded-lg shadow-md cursor-pointer btn shadow-input">
          <div>
            {checkedGearBox && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Gear Box
              </p>
            )}
            <p className="font-primary text-[16px] font-normal">
              {summaryText}
            </p>
          </div>

          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {gearBoxs.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={checkedGearBox[item.name] || false}
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

export default GearBox;
