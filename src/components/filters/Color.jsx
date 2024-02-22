import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function City() {
  const { checkedColor, setCheckedColor, setCheckedColorIds } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const [colors, setColors] = useState([]);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const colorId = event.target.id;
    setCheckedColor((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));

    setCheckedColorIds((prevItems) => ([...prevItems, colorId]));
  };
  useEffect(() => {
    async function getColors() {
      try {
        const response = await axios.get("http://localhost:8000/api/vehicle-colors");
        setColors(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getColors();
  }, []);
  const selectedOptions = Object.keys(checkedColor).filter(
    (item) => checkedColor[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Color" : selectedOptions.join(", ");

  return (
    <div className="h-full">
      <details ref={detailsRef} className="w-full h-full dropdown">
        <summary className="flex items-center justify-between w-full h-full px-5 py-4 bg-white border-none rounded-lg shadow-md cursor-pointer btn shadow-input">
          <div>
            {checkedColor && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Color
              </p>
            )}
            <p className="font-primary text-[16px] font-normal">{summaryText}</p>
          </div>

          
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {colors.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  checked={checkedColor[item.name] || false}
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

export default City;
