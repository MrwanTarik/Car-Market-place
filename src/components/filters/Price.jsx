
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
const Price = () => {
    const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(FilterContext);
    
    return (
        <div className="flex justify-between items-center rounded-lg shadow-md h-full ">
            <div className="relative w-[58%]">
                <input
                    type="number"
                    name="minPrice"
                    id="minPrice"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className="peer cursor-pointer placeholder-transparent h-10 px-4 border-gray-300 text-gray-900 focus:outline-none "
                    placeholder="Minimum Price"
                />
                <label
                    htmlFor="minPrice"
                    className="absolute cursor-pointer left-0 -top-3.5 px-4  text-sm transition-all w-full text-center peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5  peer-focus:text-sm font-primary text-secondary"
                >
                    Price thousand
                </label>
            </div>
            <div className="relative">
                <input
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="peer cursor-pointer placeholder-transparent h-10 w-full  border-l border-[#e2e2e2] px-4 text-gray-900 focus:outline-none "
                    placeholder="Maximum Price"
                />
                <label
                    htmlFor="maxPrice"
                    className="absolute cursor-pointer left-0 -top-3.5 px-4 font-primary text-secondary text-sm transition-all text-center peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5  peer-focus:text-sm"
                >
                    Max
                </label>
            </div>
        </div>
    );
};

export default Price;
