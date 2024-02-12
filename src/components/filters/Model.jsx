import axios from "axios";
import { useEffect, useRef, useState } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function Model() {
  const { checkedModels, setCheckedModels, brandId } =
    useContext(FilterContext);
  const [models, setModels] = useState([]);
  const detailsRef = useRef(null);
  const initialCheckedModelState = {};
  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    setCheckedModels((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
  };
  const selectedOptions = Object.keys(checkedModels).filter(
    (item) => checkedModels[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Model" : selectedOptions.join(", ");

  // reseting checkedModels state when brandId changes
  useEffect(() => {
    setCheckedModels(initialCheckedModelState);
  }, [brandId]);
  // get car models

  useEffect(() => {
    async function getModels() {
      try {
        const response = await axios.get(
          `https://kibcar.com/api/brand-models?brand_id=${brandId.brand}`
        );
        setModels(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getModels();
  }, [brandId]);
  return (
    <div className="h-full">
      <details ref={detailsRef} className="dropdown w-full h-full">
        <summary className="btn w-full flex justify-between items-center py-4 px-5 bg-white rounded-lg h-full shadow-input border-none shadow-md cursor-pointer">
          <div>
            {selectedOptions.length > 0 && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Model
              </p>
            )}
            <p className="font-primary text-[16px] font-normal">
              {summaryText}
            </p>
          </div>

          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>
        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {models.map((model) => (
            <li key={model.id} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={model.name}
                  checked={checkedModels[model.name] || false}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 accent-red"
                />
                <span className="ml-2 text-secondary font-primary text-[15px]">
                  {model.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Model;
