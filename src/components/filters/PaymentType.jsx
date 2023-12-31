import { useState } from "react";
const PaymentType = ({ label, type, setPaymentOptions, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (type) => {
    setPaymentOptions((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleChange = (type) => {
    setIsChecked(!isChecked);
    handleCheckboxChange(type); // Call the passed onChange function
  };
  return (
    <div className="h-full">
      <label className="inline-block cursor-pointer h-full">
        <input
          type="checkbox"
          className="sr-only"
          name={name}
          value={type}
          checked={isChecked}
          onChange={() => handleChange(type)}
        />
        <span
          className={`py-[15px] px-[20px] shadow-md rounded-lg cursor-pointer flex flex-1 justify-center items-center border ${
            !isChecked && "border-transparent"
          } h-full ${isChecked ? "text-red  border-red" : ""}`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default PaymentType;
