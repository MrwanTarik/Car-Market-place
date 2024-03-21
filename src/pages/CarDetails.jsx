import { RedHeartIcon, GrayHeartIcon } from "../components/layout/IconHover";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import complainLogo from "../assets/images/complain.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import coverImg from "../assets/images/cover.jpg";
import sampleOneImg from "../assets/images/sample-1.jpg";
import sampleTwoImg from "../assets/images/sample-2.jpg";
import sampleFourImg from "../assets/images/sample-4.jpg";
import sampleSixImg from "../assets/images/sample-6.jpg";
import brandImg from "../assets/images/brand-img.png";
import phoneDetails from "../assets/images/phone-details.png";
import locationGray from "../assets/icons/location-gray.png";
import clockGray from "../assets/icons/clock-gray.png";
import arrowIcon from "../assets/icons/arrow-icon.png";
import vipIcon from "../assets/icons/vip-icon.png";
import premiumIcon from "../assets/icons/premium-icon.png";
import RecentAnnouncement from "../components/cars/RecentAnnouncement";
import OtpCloseModal from "../assets/icons/close-modal.svg";

const images = [
  {
    original: coverImg,
    thumbnail: coverImg,
  },
  {
    original: sampleOneImg,
    thumbnail: sampleOneImg,
  },
  {
    original: sampleTwoImg,
    thumbnail: sampleTwoImg,
  },
  {
    original: sampleOneImg,
    thumbnail: sampleOneImg,
  },
  {
    original: sampleFourImg,
    thumbnail: sampleFourImg,
  },
  {
    original: sampleTwoImg,
    thumbnail: sampleTwoImg,
  },
  {
    original: sampleSixImg,
    thumbnail: sampleSixImg,
  },
];
function CarDetails() {
  const { id } = useParams();
  const [correctAd, setCorrectAd] = useState(false);
  const [deleteAd, setDeleteAd] = useState(false);
  const [correctPin, setCorrectPin] = useState("");
  const [deletePin, setDeletePin] = useState("");
  const [moveForward, setMoveForward] = useState(false);
  const handleMoveForward = () => {
    setMoveForward((prev) => !prev);
  };
  const handleCorrectAd = () => {
    setCorrectAd((prev) => !prev);
  };
  const handleDeleteAd = () => {
    setDeleteAd((prev) => !prev);
  };
  const handleCloseCorrectAd = () => {
    setCorrectAd(false);
  };
  const handleCloseDeleteAd = () => {
    setDeleteAd(false);
  };
  const handleCorrectPinChange = (e) => {
    setCorrectPin(e.target.value);
  };
  const handleDeletePinChange = (e) => {
    setDeletePin(e.target.value);
  };
  const handleMoveClose = () => {
    setMoveForward(false);
  };
  const [car, setCar] = useState(null);
  const [carImages, setCarImages] = useState([]);
  useEffect(() => {
    async function getCar() {
      try {
        const response = await axios.get(
          `https://kibcar.com/api/announcements/${id}`
        );
        setCar(response.data.data);
        const featuredImagesArr = [
          {
            original: response.data.data.vehicle_front_view_image,
            thumbnail: response.data.data.vehicle_front_view_image,
          },
          {
            original: response.data.data.vehicle_front_panel_image,
            thumbnail: response.data.data.vehicle_front_panel_image,
          },
          {
            original: response.data.data.vehicle_back_view_image,
            thumbnail: response.data.data.vehicle_back_view_image,
          },
        ];

        const ImagesArr = response.data.data.images.map(function (img) {
          return {
            original: img.path,
            thumbnail: img.path,
          };
        });

        setCarImages([...featuredImagesArr, ...ImagesArr]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCar();
  }, [id]);
  const [heart, setHeart] = useState(false);
  const [complain, setComplain] = useState(false);
  const [number, setNumber] = useState(false);

  if (car) {
    return (
      <>
        <div
          className={`absolute inset-0 bg-black z-[2]  ${
            correctAd || deleteAd || moveForward
              ? "bg-opacity-25  visible z-[2]"
              : "invisible  bg-opacity-0 -z-10"
          }`}
        ></div>
        <div className=" pb-[120px] ">
          <div
            className={`fixed  top-0 left-0 right-0 bottom-0 h-[250px] m-auto bg-white rounded-lg shadow-lg  w-full max-w-[450px] ${
              correctAd
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
              <p className="font-primary font-medium text-[16px] text-center text-white">
                Confirm your identity
              </p>
              <img
                onClick={handleCloseCorrectAd}
                className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
                src={OtpCloseModal}
                alt="handleCloseCorrectAd"
              />
            </div>
            <div className="px-[20px]">
              <div className="py-[20px]">
                <p className="text-[#6B6B6B] text-[14px]">
                  Enter your OTP to continue.
                </p>
                <p className="text-[#6B6B6B] text-[14px]">
                  You can get the OTP code from the letter sent to you on gmail
                </p>
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[14px] mb-[15px]">Ad PIN:</p>
              </div>
              <div className="flex gap-x-[20px]">
                <input
                  type="text"
                  name="pin"
                  value={correctPin}
                  onChange={handleCorrectPinChange}
                  className="px-4 py-[12px] border rounded w-full"
                  placeholder="Enter PIN"
                />
                <button className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md ">
                  Submit PIN
                </button>
              </div>
            </div>
          </div>
          <div
            className={`fixed  top-0 left-0 right-0 bottom-0 h-[250px] m-auto bg-white rounded-lg shadow-lg  w-full max-w-[450px] ${
              deleteAd
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
              <p className="font-primary font-medium text-[16px] text-center text-white">
                Confirm your identity
              </p>
              <img
                onClick={handleCloseDeleteAd}
                className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
                src={OtpCloseModal}
                alt="handleCloseDeleteAd"
              />
            </div>
            <div className="px-[20px]">
              <div className="py-[20px]">
                <p className="text-[#6B6B6B] text-[14px]">
                  Enter your OTP to continue.
                </p>
                <p className="text-[#6B6B6B] text-[14px]">
                  You can get the OTP code from the letter sent to you on gmail
                </p>
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[14px] mb-[15px]">Ad PIN:</p>
              </div>
              <div className="flex gap-x-[20px]">
                <input
                  type="text"
                  name="pin"
                  value={deletePin}
                  onChange={handleDeletePinChange}
                  className="px-4 py-[12px] border rounded w-full"
                  placeholder="Enter PIN"
                />
                <button className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md ">
                  Delete PIN
                </button>
              </div>
            </div>
          </div>
          <div
            className={` bg-white rounded-lg  h-[600px] w-full max-w-[600px] fixed  top-0 left-0 right-0 bottom-0 m-auto   ${
              moveForward
                ? "visible opacity-100 z-10"
                : "invisible opacity-0 -z-10"
            }`}
          >
            {" "}
            {/* Modal content with higher z-index */}
            <iframe
              className="!overflow-auto !w-full !h-[calc(100%-60px)]"
              src={`https://www.paytr.com/odeme/guvenli/`}
              id="paytriframe"
              frameBorder="0"
              scrolling="no"
              style={{ width: "100%", height: "100%", overflowY: "auto" }}
            ></iframe>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleMoveClose}
                className="px-4 py-[12px]  font-bold text-white bg-red rounded-md"
              >
                Close
              </button>
            </div>
          </div>
          <div className="fix"></div>
          <div className="container">
            <p className="font-primary font-medium leading-7 pb-[20px] border-b border-solid border-[#E2E2E2] uppercase text-[17px] pt-[56px] text-secondary">
              {/* Car dealerships . autolux azerbaijan - */}
              {car.brand.name} . {car.brand.name} . {car.brand_model.name}
            </p>
            <div className="flex md:flex-row flex-col gap-y-4 md:gap-y-0  items-center justify-between mt-[30px] ">
              <h2 className="text-[#505050] text-center md:text-start text-[26px] font-secondary font-bold leading-8">
                {car.brand.name} {car.brand_model.name}, 2.3 L ,{" "}
                {car.vehicle_year.name} year , {car.vehicle_status}
              </h2>
              <div className="flex items-center gap-x-[30px]">
                <Link
                  className="flex items-center space-x-[10px]  rounded-md justify-center bg-white "
                  to={""}
                >
                  <button onClick={() => setHeart(!heart)}>
                    {heart ? <RedHeartIcon /> : <GrayHeartIcon />}
                  </button>
                  <p className="font-primary text-[16px] font-medium leading-[21px] text-secondary">
                    Save to favourites
                  </p>
                </Link>
                <Link
                  className="flex items-center space-x-[10px] rounded-md justify-center bg-white "
                  to={""}
                  onClick={() => setComplain(!complain)}
                >
                  <img src={complainLogo} alt="complain" />
                  <p className="font-primary text-[16px] font-medium leading-[21px] text-secondary">
                    Complain
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col mt-[40px] md:mt-[60px] justify-between items-start lg:gap-x-[30px] lg:g-y-0 gap-y-8">
              <div className="lg:w-[67%] w-full">
                <ImageGallery
                  infinite={true}
                  showPlayButton={false}
                  autoPlay={true}
                  slideDuration={500}
                  swipingTransitionDuration={100}
                  showNav={false}
                  slideInterval={3000}
                  items={carImages}
                />
                <ul className="pt-[20px] pb-[20px] picture-list pl-[20px] border-b border-solid border-[#E2E2E2]">
                  <li>Updated: {car.updated_date}</li>
                  {/* <li>Views: 73580</li> */}
                </ul>
                <div className="grid grid-cols-12 pb-[12px] border-b border-solid border-[#E2E2E2]">
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[20px]">
                      <p className="font-primary text-[16px] text-secondary">
                        City
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        Brand
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        Model
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        graduation year
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        Ban type
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        Color
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        Engine
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        March
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[20px]">
                      <p className="font-primary text-[16px] text-secondary">
                        Baku
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.brand.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.vehicle_year.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.vehicle_category.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.vehicle_color.name}
                      </p>

                      <p className="font-primary text-[16px] text-secondary">
                        {car.vehicle_color.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {/* 2.3 L/130 hp/Diesel */}
                        {car.fuel_type.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.mileage} km
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[20px]">
                      <p className="font-primary text-[16px] text-secondary">
                        Baku
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.brand.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.vehicle_year.name}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
                    <div className="flex flex-col gap-y-[20px]">
                      <p className="font-primary text-[16px] text-secondary">
                        Mechanical
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        {car.vehicle_transmission.name}
                      </p>
                      <p className="font-primary text-[16px] text-secondary">
                        Yes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[10px] mt-[30px] ">
                  <p className="font-primary text-secondary text-[16px]">
                    3 Seater Fiat DUCATO ARMORED
                  </p>
                  <p className="font-primary text-secondary text-[16px]">
                    Air Conditioning
                  </p>
                  <p className="font-primary text-secondary text-[16px]">
                    Reinforced two-piece spring
                  </p>
                  <p className="font-primary text-secondary text-[16px]">ABS</p>
                  <p className="font-primary text-secondary text-[16px]">
                    Alloy wheels / Continental 215/75/R16
                  </p>
                  <p className="font-primary text-secondary text-[16px] mb-[20px]">
                    - A loan of up to 4 years is possible for individuals and
                    legal entities
                  </p>
                  <Link
                    className="font-primary text-[16px] font-normal text-link pb-[20px] mb-[10px] border-b border-solid border-[#E2E2E2]"
                    to={""}
                  >
                    Red more...
                  </Link>
                  <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-3 pb-[20px] border-b border-solid border-[#e2e2e2]">
                    <p className="bg-[#F6F7FA] py-[14px] px-[20px] font-secondary">
                      Alloy wheels
                    </p>
                    <p className="bg-[#F6F7FA] py-[14px] px-[20px] font-secondary">
                      USA
                    </p>
                    <p className="bg-[#F6F7FA] py-[14px] px-[20px] font-secondary">
                      Central locking
                    </p>
                    <p className="bg-[#F6F7FA] py-[14px] px-[20px] font-secondary">
                      Central locking
                    </p>
                    <p className="bg-[#F6F7FA] py-[14px] px-[20px] font-secondary">
                      Air conditioning
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-[20px]">
                    <div className="flex gap-x-[20px]">
                      <Link
                        onClick={handleCorrectAd}
                        className="font-primary text-[16px] underline text-secondary"
                      >
                        Correct it
                      </Link>
                      <Link
                        onClick={handleDeleteAd}
                        className="font-primary text-[16px] underline text-secondary"
                      >
                        Delete the ad
                      </Link>
                    </div>
                    <p className="font-primary text-[16px] underline text-secondary">
                      Ad number: 5733263
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full ">
                <div className="bg-[#F6F7FA] p-[30px] w-full">
                  <h2 className="font-secondary pb-[20px] border-b border-solid border-[#e2e2e2] mb-[32px] text-[26px] font-bold leading-8 text-primary ">
                    {car.price} {car.price_currency}
                  </h2>
                  <div className="p-[20px] gap-x-5 flex">
                    <img
                      className="w-[60px] h-[60px]"
                      src={brandImg}
                      alt="brandImg"
                    />
                    <p>Autolux Azerbaijan - Fiat Official representative</p>
                  </div>
                  <div className="py-[20px] px-[35px] bg-link rounded-xl">
                    <p
                      onClick={() => setNumber((prev) => !prev)}
                      className="text-center font-primary text-white text-[16px] cursor-pointer"
                    >
                      Show The Number
                    </p>
                    <a
                      href="tel:+1234567890"
                      className={` justify-center flex items-center gap-x-[10px] font-secondary text-[18px] font-bold leading-7 text-white h-0 ${
                        number ? "visible h-8 pt-[10px]" : "invisible "
                      }`}
                    >
                      <img
                        className="w-6 h-6"
                        src={phoneDetails}
                        alt="phoneDetails"
                      />
                      (012)599-08-01
                    </a>
                  </div>
                  <div className="pt-[17px] mt-[15px] border-t border-solid border-[#E2E2E2] flex-col flex gap-y-[20px]">
                    <p className="text-black font-primary text-[16px] font-normal">
                      Simply more
                    </p>
                    <p className="text-secondary font-primary text-[16px] font-normal">
                      "AvtoLux Azerbaijan", the official distributor of "Fiat"
                      in Azerbaijan, provides a 3-year or 60,000 km official
                      manufacturer's warranty...
                    </p>
                    <p className="text-secondary font-primary text-[16px] font-normal underline pb-[20px]">
                      10 ads
                    </p>
                  </div>
                  <div className="pt-[17px] border-t border-solid border-[#E2E2E2] flex flex-col gap-y-[11px]">
                    <div className="flex gap-x-[20px] items-center">
                      <img
                        className="w-6 h-6"
                        src={locationGray}
                        alt="locationGray"
                      />
                      <p className="text-[17px] font-primary font-medium leading-7 uppercase text-primary">
                        Daily: 09:00-19:00
                      </p>
                    </div>
                    <div className="flex gap-x-[10px] items-center">
                      <img
                        className="w-6 h-6"
                        src={clockGray}
                        alt="clockGray"
                      />
                      <p className="text-[17px] font-primary font-medium leading-7 uppercase text-primary underline">
                        Baku, Khatai r. Babak pr.26
                      </p>
                    </div>
                  </div>
                  <Link
                    to={"/"}
                    className="flex flex-col mt-[25px] py-[18px] text-white px-[20px] text-center font-primary bg-link rounded-md"
                  >
                    Go to the hall
                  </Link>
                </div>
                <div
                  to={""}
                  className="flex md:flex-row flex-col md:gap-x-[10px] mt-[20px]"
                >
                  <Link
                    onClick={handleMoveForward}
                    className="p-[10px] w-full flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md "
                  >
                    <div className="flex flex-col ">
                      <p className="font-primary text-[14px] font-bold leading-6 text-primary">
                        Move forward
                      </p>
                      <span className="font-primary text-[14px] font-normal text-link leading-6 ">
                        From 3 AZN
                      </span>
                    </div>
                    <img className="w-4 h-4" src={arrowIcon} alt="arrowIcon" />
                  </Link>
                  {/* <Link className="p-[10px] w-full md:w-[33%] flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md ">
                    <div className="flex flex-col ">
                      <p className="font-primary text-[14px] font-bold leading-6 text-primary">
                        Move forward
                      </p>
                      <span className="font-primary text-[14px] font-normal text-link leading-6 ">
                        From 3 AZN
                      </span>
                    </div>
                    <img className="w-4 h-4" src={vipIcon} alt="vipIcon" />
                  </Link>
                  <Link className="p-[10px] w-full md:w-[33%] flex gap-x-[10px] items-center bg-[#F6F7FA] rounded-md ">
                    <div className="flex flex-col ">
                      <p className="font-primary text-[14px] font-bold leading-6 text-primary">
                        Move forward
                      </p>
                      <span className="font-primary text-[14px] font-normal text-link leading-6 ">
                        From 3 AZN
                      </span>
                    </div>
                    <img
                      className="w-4 h-4"
                      src={premiumIcon}
                      alt="premiumIcon"
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            {/* <RecentAnnouncement carDetail={true} /> */}
          </div>
        </div>
      </>
    );
  }
}

export default CarDetails;
