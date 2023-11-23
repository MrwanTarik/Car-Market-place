import { useRef, useState } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";

function VolumeMax() {
  const [selectedVolumeMax, setSelectedVolumeMax] = useState("");
  const detailsRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedVolumeMax(item);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  const brands = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <div className="h-full">
      <details ref={detailsRef} className="dropdown w-full h-full">
        <summary className="btn w-full flex justify-between items-center py-4 px-5 bg-white rounded-lg h-full shadow-input border-none shadow-md">
          <div>
            {selectedVolumeMax && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">Max</p>
            )}
            <p className="font-primary text-[16px] font-normal">
              {selectedVolumeMax || "Max"}
            </p>
          </div>
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 flex justify-start w-full mt-2 rounded-none rounded-l-lg">
          {brands.map((item) => (
            <li key={item} onClick={() => handleSelection(item)}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default VolumeMax;
