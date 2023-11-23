import { useRef, useState } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";

function OwnersNumber() {
  const [checkedOwnersNumber, setCheckedOwnersNumber] = useState(false);
  const detailsRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    setCheckedOwnersNumber((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
  };
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
    "Option 11",
    "Option 12",
    "Option 13",
  ];
  const selectedOptions = Object.keys(checkedOwnersNumber).filter(
    (item) => checkedOwnersNumber[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Number of Owners" : selectedOptions.join(", ");

  return (
    <div className="h-full">
      <details ref={detailsRef} className="dropdown w-full h-full">
        <summary className="btn w-full flex justify-between items-center py-4 px-5 bg-white rounded-lg h-full shadow-input border-none shadow-md cursor-pointer">
          <div>
            {OwnersNumber && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Number of Owners
              </p>
            )}
            <p className="font-primary text-[16px] font-normal text-start">{summaryText}</p>
          </div>

          
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>

        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {options.map((item) => (
            <li key={item} className="flex items-center">
              <label className="flex items-center w-full px-2 py-1 text-secondary font-primary">
                <input
                  type="checkbox"
                  name={item}
                  checked={checkedOwnersNumber[item] || false}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 accent-red"
                />
                <span className="ml-2 text-secondary font-primary text-[15px]">
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default OwnersNumber;
