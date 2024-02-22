import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
function Brand() {
  const { brandId, setBrandId } = useContext(FilterContext);
  const [brandName, setBrandName] = useState("");
  const [brands, setBrands] = useState([]);
  const detailsRef = useRef(null);

  const handleSelection = (item) => {
    setBrandId({
      brand: item.id,
    });
    setBrandName(item.name);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  // get brands
  useEffect(() => {
    async function getBrands() {
      try {
        const response = await axios.get("http://localhost:8000/api/brands");
        setBrands(response.data);
        console.log(brands);
      } catch (error) {
        console.log(error);
      }
    }
    getBrands();
  }, []);
  console.log(brandId);
  return (
    <div className="h-full">
      <details ref={detailsRef} className="dropdown w-full h-full">
        <summary className="btn w-full flex justify-between items-center py-4 px-5 bg-white rounded-lg h-full shadow-input border-none shadow-md">
          <div>
            {brandName && (
              <p className="font-primary mb-1 text-[12px] opacity-70 text-secondary text-start">
                Brand
              </p>
            )}
            <p className="font-primary text-[16px] font-normal">
              {brandName || "Brand"}
            </p>
          </div>
          <img src={chivronBottom} alt="chivron-Bottom" />
        </summary>
        <ul className="p-2 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-2 rounded-lg max-h-[210px] overflow-y-auto">
          {brands.map((brand) => (
            <li key={brand.id} onClick={() => handleSelection(brand)}>
              <a>{brand.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Brand;
