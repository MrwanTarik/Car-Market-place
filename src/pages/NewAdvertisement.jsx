import { useState } from "react";
import addMore from "../assets/images/add-more.png";
import backView from "../assets/images/back-view.png";
import frontView from "../assets/images/front-view.png";
import insideView from "../assets/images/inside-view.png";
import { IoIosClose } from "react-icons/io";
function NewAdvertisement() {
  const [formData, setFormData] = useState({
    brand: "",
    fuelType: "",
    model: "",
    gear: "",
    banType: "",
    gearBox: "",
    march: "",
    marchNum: "",
    year: "",
    color: "",
    engineVolume: "",
    price: "",
    currencyValue: "",
    enginePower: "",
    howManyDoYouOwn: "",
    marketAssembled: "",
    hasStroke: false,
    hasColor: false,
    needRepair: false,
    seatNum: "",
    credit: false,
    barter: false,
    vinCode: "",
    moreInfo: "",
    alloyWheels: false,
    centralLocking: false,
    leatherSalon: false,
    seatVentilation: false,
    usa: false,
    parkingRadar: false,
    xenonLamps: false,
    hatch: false,
    airConditioning: false,
    nearViewCamera: false,
    rainSensor: false,
    seatHeating: false,
    sideCurtains: false,
    userName: "",
    userCity:"",
    userEmail: "",
    userTel: "",
    uploadedImages:[]
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  }
  const placeholderImages = [frontView, backView, insideView];

  const handleImageUpload = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const newImage = {
        src: URL.createObjectURL(file),
        flipped: 0,
      };

      // Replace or add new uploaded image
      let updatedImages = [...formData.uploadedImages];
      updatedImages[index] = newImage;
      setFormData({
        ...formData,
        uploadedImages: updatedImages
      });
    }
  };

  const addImage = (event) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newImages = files.map((file) => ({
        src: URL.createObjectURL(file),
        flipped: 0,
      }));
      setFormData({
        ...formData,
        uploadedImages: [...formData.uploadedImages, ...newImages]
      });
    }
  };

  const rotateImage = (index, direction) => {
    const updatedImages = formData.uploadedImages.map((img, i) =>
      i === index
        ? {
            ...img,
            flipped: img.flipped + (direction === "clockwise" ? 90 : -90),
          }
        : img
    );
  
    setFormData({
      ...formData,
      uploadedImages: updatedImages
    });
  };
  
  const removeImage = (index) => {
    const updatedImages = formData.uploadedImages.filter((_, i) => i !== index);
  
    setFormData({
      ...formData,
      uploadedImages: updatedImages
    });
  };

  const imageSlots = formData.uploadedImages.map((image, index) => (
    <div key={index} className="md:w-[48%] lg:w-[23%] w-full h-[180px] inline-block m-2">
      <img
        src={image.src}
        alt={`Uploaded image ${index}`}
        className="w-full  h-full object-cover"
        style={{ transform: `rotate(${image.flipped}deg)` }}
      />
      <div>
        <div className="flex justify-between">
          <button
            onClick={() => removeImage(index)}
            className="!text-[35px] text-red"
          >
            <IoIosClose />
          </button>
          <div className="flex gap-x-3">
            <button
              onClick={() => rotateImage(index, "clockwise")}
              className=" text-red !text-[24px]"
            >
              ↻
            </button>
            <button
              onClick={() => rotateImage(index, "counterclockwise")}
              className=" text-red !text-[24px]"
            >
              ↺
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  // Add placeholders to imageSlots if they're not already replaced by an uploaded image
  [frontView, backView, insideView].forEach((placeholder, index) => {
    if (!formData.uploadedImages[index]) {
      imageSlots.splice(
        index,
        0,
        <div
          key={`placeholder-${index}`}
          className="relative md:w-[48%] w-full lg:w-[23%] h-[180px] inline-block m-2"
        >
          <input
            type="file"
            id={`file-upload-${index}`}
            style={{ display: "none" }}
            onChange={(e) => handleImageUpload(e, index)}
            accept="image/*"
          />
          <img
            src={placeholder}
            alt={`Placeholder ${index}`}
            className="max-w-full m-auto lg:m-0 h-full object-cover cursor-pointer"
            onClick={() =>
              document.getElementById(`file-upload-${index}`).click()
            }
          />
        </div>
      );
    }
  });

  // Always show the "Add More" button
  imageSlots.push(
    <div key="add-more" className="relative  md:w-[48%] w-full lg:w-[23%] h-[180px] inline-block m-2">
      <input
        type="file"
        id="file-upload-add-more"
        style={{ display: "none" }}
        onChange={addImage}
        accept="image/*"
        multiple
      />
      <img
        src={addMore}
        alt="Add more"
        className="max-w-full m-auto lg:m-0 h-full object-cover cursor-pointer"
        onClick={() => document.getElementById("file-upload-add-more").click()}
      />
    </div>
  );

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="mt-[30px]">
          <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary">
            POSTING AN ADVERTISEMENT
          </h2>
          <ul className="flex flex-col space-y-[20px] items-start mt-[30px] mb-[80px] list-outside advertisement-list font-primary text-[16px] text-secondary">
            <li>
              A vehicle can be published for free only once in three months.
            </li>
            <li>
              Repeat or similar ads (make/model, color) within three months are
              paid.
            </li>
            <li>
              Use the "Promote" service to see your ad on the front lines of the
              site
            </li>
          </ul>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Brand
                </label>
                <select
                  name="brand"
                  id="brand"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.brand}
                  placeholder="Select brand"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Fuel type
                </label>
                <select
                  name="fuelType"
                  id="fuelType"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.fuelType}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Model
                </label>
                <select
                  name="model"
                  id="Model"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.model}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Gear
                </label>
                <select
                  name="gear"
                  id="gear"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.gear}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Ban Type
                </label>
                <select
                  name="banType"
                  id="banType"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.banType}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Gear Box
                </label>
                <select
                  name="gearBox"
                  id="gearBox"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.gearBox}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Gear Box
                </label>
                <div className="flex items-center justify-between gap-x-8 md:max-w-[452px] w-full">
                  <div className="w-1/2 md:w-auto">
                    <input
                      name="march"
                      type="number"
                      id="march"
                      className="w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                      onChange={handleChange}
                      value={formData.march}
                    />
                  </div>
                  <div className="md:max-w-[177px] flex space-x-4 items-center w-1/2">
                    <div className="flex gap-x-2 items-center">
                      <input
                        className="accent-red w-4 h-4"
                        onChange={handleChange}
                        id="km"
                        type="radio"
                        name="marchNum"
                        value="km"
                      />
                      <label
                        className="text-[16px] font-secondary"
                        htmlFor="km"
                      >
                        km
                      </label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <input
                        className="accent-red w-4 h-4"
                        onChange={handleChange}
                        id="mi"
                        type="radio"
                        name="marchNum"
                        value="mi"
                      />
                      <label
                        className="text-[16px] font-secondary"
                        htmlFor="mi"
                      >
                        mi
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Year
                </label>
                <select
                  name="year"
                  id="year"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.year}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Color
                </label>
                <select
                  name="color"
                  id="color"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.color}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Engine volume.cm 3
                </label>
                <select
                  name="engineVolume"
                  id="engineVolume"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.engineVolume}
                >
                  <option value={""} disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Price
                </label>
                <div className="flex items-center justify-between gap-x-8 md:max-w-[452px] w-full">
                  <div className="w-1/2 md:w-auto">
                    <input
                      name="price"
                      type="number"
                      id="price"
                      className="w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                      onChange={handleChange}
                      value={formData.price}
                    />
                  </div>
                  <div className="md:max-w-[220px] flex space-x-4 items-center w-1/2">
                    <div className="flex gap-x-2 items-center">
                      <input
                        className="accent-red w-4 h-4"
                        onChange={handleChange}
                        id="azn"
                        type="radio"
                        name="currencyValue"
                        value="azn"
                      />
                      <label
                        className="text-[16px] font-secondary"
                        htmlFor="azn"
                      >
                        AZN
                      </label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <input
                        className="accent-red w-4 h-4"
                        onChange={handleChange}
                        id="usd"
                        type="radio"
                        name="currencyValue"
                        value="usd"
                      />
                      <label
                        className="text-[16px] font-secondary"
                        htmlFor="usd"
                      >
                        USD
                      </label>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <input
                        className="accent-red w-4 h-4"
                        onChange={handleChange}
                        id="eur"
                        type="radio"
                        name="currencyValue"
                        value="eur"
                      />
                      <label
                        className="text-[16px] font-secondary"
                        htmlFor="eur"
                      >
                        EUR
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  Engine power.ag
                </label>
                <select
                  name="enginePower"
                  id="enginePower"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.enginePower}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  How many do you own?
                </label>
                <select
                  name="howManyDoYouOwn"
                  id="howManyDoYouOwn"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.howManyDoYouOwn}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative ">
                  For which market it is assem
                </label>
                <select
                  name="marketAssembled"
                  id="marketAssembled"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                  value={formData.marketAssembled}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="Kia">Kia</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary">
                  The Situation
                </label>
                <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                  <div className="mt-[2px]">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.hasStroke}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="hasStroke"
                        id="hasStroke"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="hasStroke">
                      <h3 className="font-primary text-[16px] font-normal text-primary ">
                        It has a stroke
                      </h3>
                      <p className="pt-1 text-[14px] font-primary text-secondary">
                        One or more parts have been replaced or repaired.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col mt-6">
                <label className="font-primary text-[16px] font-normal invisible text-secondary">
                  The Situation
                </label>
                <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                  <div className="mt-[2px]">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.needRepair}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="needRepair"
                        id="needRepair"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="needRepair">
                      <h3 className="font-primary text-[16px] font-normal text-primary ">
                        For accident or spare parts
                      </h3>
                      <p className="pt-1 text-[14px] font-primary text-secondary">
                        In need of repair or in general disrepair..
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                <label className="font-primary text-[16px] font-normal invisible text-secondary">
                  The Situation
                </label>
                <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                  <div className="mt-[2px]">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.hasColor}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="hasColor"
                        id="needRepair"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="needRepair">
                      <h3 className="font-primary text-[16px] font-normal text-primary ">
                        It is colored
                      </h3>
                      <p className="pt-1 text-[14px] font-primary text-secondary">
                        One or more details have been painted or cosmetic work
                        has been done.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                <label className="font-primary text-[16px] font-normal text-secondary md:min-w-[12%]">
                  Number of seats
                </label>
                <div className="md:flex-nowrap  flex-wrap gap-y-3 md:gap-y-0  md:min-w-[452px] w-full space-x-5 flex md:ml-2">
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum1"
                      type="radio"
                      name="seatNum"
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum1"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum2"
                      type="radio"
                      name="seatNum"
                      value="2"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum2"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum3"
                      type="radio"
                      name="seatNum"
                      value="3"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum3"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum4"
                      type="radio"
                      name="seatNum"
                      value="4"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum4"
                    >
                      4
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum5"
                      type="radio"
                      name="seatNum"
                      value="5"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum5"
                    >
                      5
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum6"
                      type="radio"
                      name="seatNum"
                      value="6"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum6"
                    >
                      6
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum7"
                      type="radio"
                      name="seatNum"
                      value="7"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum7"
                    >
                      7
                    </label>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum8"
                      type="radio"
                      name="seatNum"
                      value="8"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal text-primary"
                      htmlFor="seatNum8"
                    >
                      8
                    </label>
                  </div>
                  <div className="flex gap-x-1 ml-0  items-center">
                    <input
                      className="accent-red w-4 h-4"
                      id="seatNum8"
                      type="radio"
                      name="seatVal"
                      value="Don’t be mentioned"
                      onChange={handleChange}
                    />
                    <label
                      className="text-[16px] font-normal  text-primary"
                      htmlFor="seatVal"
                    >
                      Don’t be mentioned
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary  "></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex md:ml-2">
                  <div className="mt-[2px] ">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.credit}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="credit"
                        id="credit"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="credit">
                      <h3 className="font-primary text-[16px] font-normal text-primary ">
                        With credit
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary "></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex md:ml-2">
                  <div className="mt-[2px] ">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.barter}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="barter"
                        id="barter"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="barter">
                      <h3 className="font-primary text-[16px] font-normal text-primary ">
                        Barter is possible
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[30px] mt-[80px]">
            <div className="md:col-span-6 col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[50px] md:flex-row flex-col">
                <label className="font-primary text-[16px] font-normal text-secondary">
                  VIN code
                </label>
                <input
                  type="text"
                  value={formData.vinCode}
                  name="vinCode"
                  id="vinCode"
                  className="w-full focus:outline-0 md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between lg:gap-[50px] xl:gap-[90px] md:flex-row flex-col">
                <label className="font-primary min-w-[170] text-[16px] font-normal text-secondary">
                  Additional Information
                </label>
                <textarea
                  type="textarea"
                  value={formData.moreInfo}
                  name="moreInfo"
                  id="moreInfo"
                  className="w-full min-h-[132px]  focus:outline-0 md:min-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal"
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
              </div>
            </div>
          </div>
          <div className="mt-[117px]">
            <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary mb-[80px]">
              Vehicle supply
            </h2>
            <div className="grid grid-cols-12 gap-y-5">
              <div className="xl:col-span-3 lg:col-span-4 col-span-6 space-y-[10px]">
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.alloyWheels}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="alloyWheels"
                      id="alloyWheels"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="alloyWheels">Alloy wheels</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.centralLocking}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="centralLocking"
                      id="centralLocking"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="centralLocking">Central locking</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.leatherSalon}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="leatherSalon"
                      id="leatherSalon"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="leatherSalon">Leather salon</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.seatVentilation}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="seatVentilation"
                      id="seatVentilation"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="seatVentilation">Seat ventilation</label>
                </div>
              </div>
              <div className="xl:col-span-3 lg:col-span-4 col-span-6 space-y-[10px]">
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.usa}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="usa"
                      id="usa"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="usa">USA</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.parkingRadar}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="parkingRadar"
                      id="parkingRadar"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="parkingRadar">Parking radar</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.xenonLamps}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="xenonLamps"
                      id="xenonLamps"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="xenonLamps">Xenon lamps</label>
                </div>
              </div>
              <div className="xl:col-span-3 lg:col-span-4 col-span-6 space-y-[10px]">
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.hatch}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="hatch"
                      id="hatch"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="hatch">Hatch</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.airConditioning}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="airConditioning"
                      id="airConditioning"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="airConditioning">Air conditioning</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.nearViewCamera}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="nearViewCamera"
                      id="nearViewCamera"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="nearViewCamera">Rear view camera</label>
                </div>
              </div>
              <div className="xl:col-span-3 lg:col-span-4 col-span-6 space-y-[10px]">
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.rainSensor}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="rainSensor"
                      id="rainSensor"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="rainSensor">Rain sensor</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.seatHeating}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="seatHeating"
                      id="seatHeating"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="seatHeating">Seat heating</label>
                </div>
                <div className="mt-[2px] flex items-center space-x-[10px]">
                  <label className="custom-checkbox flex items-center ">
                    <input
                      checked={formData.sideCurtains}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="sideCurtains"
                      id="sideCurtains"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="sideCurtains">Side curtains</label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <h2 className="uppercase mt-[110px] mb-[30px] font-secondary text-[26px] font-bold leading-8 text-primary">
                  Pictures
                </h2>
                <div className="p-[30px] flex lg:flex-row flex-col lg:gap-x-14 gap-y-4 lg:gap-y-0 border-dashed border border-link">
                  <div className="lg:max-w-[424px] lg:min-w-[424px] flex flex-col lg:gap-y-7 gap-y-4">
                    <p className="text-[16px] font-primary text-secondary">
                      Minimum – 3 pictures (front, back and whole front panel
                      image is mandatory).
                    </p>
                    <ul className="flex picture-list text-secondary pl-8 flex-col lg:gap-y-7 gap-y-4">
                      <li>- Maximum – 21 images.</li>
                      <li>- Optimal size – 1024x768 pixels.</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-y-[50px] lg:gap-x-6 xl:gap-x-0 ">
                    {imageSlots}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[30px] mt-[80px]">
            <div className="lg:col-span-6 col-span-12">
              <ul className="flex flex-col gap-y-[30px] picture-list ml-5">
                <li>Photos must be taken in the territory of the Republic of Azerbaijan</li>
                <li>Photos must be of good quality. The vehicle should be well-lit, there should be no logos and other inscriptions on the pictures. Screenshots are not accepted.</li>
              </ul>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <ul className="flex flex-col gap-y-[30px] picture-list ml-5 lg:ml-0 ">
                <li>Photos taken at the dealership must be uploaded from the registered dealership's account.</li>
                <li>A vehicle sold by a private owner must not be photographed in or near the showroom/official service area.</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[117px]">
          <div className="col-span-12">
          <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary">
          Contact
          </h2>
          <p className="mt-[10px] font-primary text-secondary">No changes are made to the contact details after the advertisement is published.</p>
          <div className="mt-[80px] flex flex-col gap-y-[30px]">
          <div className="flex md:flex-row flex-col md:items-center items-start gap-y-3">
              <label className="md:min-w-[244px] md:max-w-[244px] w-full" htmlFor="yourName">Your Name</label>
              <input className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal focus:outline-0" type="text" name="userName" id="yourName" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start">
              <label className="md:min-w-[244px] md:max-w-[244px] w-full" htmlFor="userCity">City</label>
              <select className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal focus:outline-0" name="userCity" id="userCity" placeholder="Enter Your City" value={formData.userCity} onChange={handleChange} >
              <option value="Cairo" >Cairo</option>
              <option value="Alex" >Alex</option>
              <option value="Fayoum" >Fayoum</option>
              <option value="Zayed" >Zayed</option>
              </select>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start gap-y-3">
              <label className="md:min-w-[244px] md:max-w-[244px] w-full" htmlFor="userEmail">E-mail</label>
              <input className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal focus:outline-0" type="Email" name="userEmail" id="userEmail" placeholder="moniruiux@gamil.com" value={formData.userEmail} onChange={handleChange} />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start gap-y-3">
              <label className="md:min-w-[244px] md:max-w-[244px] w-full" htmlFor="userTel">Mobile Number</label>
              <input className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[16px] text-secondary font-normal focus:outline-0" type="tel" name="userTel" id="userTel" placeholder="014656+546566+654" value={formData.userTel} onChange={handleChange} />
            </div>
            <div className="max-w-[700px] mt-30 flex justify-end">
              <button className="md:min-w-[452px] min-w-full text-[16px] font-primary text-white  py-[18px] px-[20px] outline-none rounded-md font-medium bg-link" type="submit">Continue</button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewAdvertisement;
