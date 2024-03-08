import axios from "axios";
import { useState, useEffect } from "react";
import Brand from "../components/filters/Brand";
import City from "../components/filters/City";
import Model from "../components/filters/Model";
import Type from "../components/filters/Type";
import Price from "../components/filters/Price";
import PaymentCurrency from "../components/filters/PaymentCurrency";
import PaymentType from "../components/filters/PaymentType";
import { Link } from "react-router-dom";
import BanType from "../components/filters/BanType";
import YearManufacturer from "../components/filters/YearManufacturer";
import MaxYearManufacturer from "../components/filters/MaxYearManufacturer";
import Color from "../components/filters/Color";
import FuelType from "../components/filters/FuelType";
import Gear from "../components/filters/Gear";
import GearBox from "../components/filters/GearBox";
import VolumeMin from "../components/filters/VolumeMin";
import VolumeMax from "../components/filters/VolumeMax";
import chevronTop from "../assets/icons/chivron-top.svg";
import chivronBottom from "../assets/icons/chivron-bottom.svg";
import notifiedIcon from "../assets/icons/notify-icon.svg";
import Power from "../components/filters/Power";
import Mileage from "../components/filters/Mileage";
import CarType from "../components/filters/CarType";
import OwnersNumber from "../components/filters/OwnersNumber";
import SeatsNumber from "../components/filters/SeatsNumber";
import Market from "../components/filters/Market";
import { useContext } from "react";
import FilterContext from "../context/filterContext/FilterContext";
import VipAnnouncement from "../components/cars/VipAnnouncement";
import RecentAnnouncement from "../components/cars/RecentAnnouncement";
import PremiumAds from "../components/cars/PremiumAds";
import VehicleFeatures from "../components/cars/VehicleFeatures";
function Homepage() {
  const [premiumAds, setPremiumAds] = useState([]);
  const [ads, setAds] = useState([]);
  const [adsCount, setAdsCount] = useState(0);

  const { newAds, moreFilters, handleMoreFilters, setPaymentOptions } =
    useContext(FilterContext);

  const filterContextData = useContext(FilterContext);

  useEffect(() => {
    async function getAds() {
      try {
        const response = await axios.get(
          "https://kibcar.com/api/announcements/filter"
        );
        setPremiumAds(response.data.premiumAnnouncements);
        setAds(response.data.announcements);
        setAdsCount(
          response.data.announcementsCount +
            response.data.premiumAnnouncementsCount
        );
      } catch (error) {
        console.log(error);
      }
    }
    getAds();
  }, []);

  const showFilterPayload = async () => {
    try {
      const data = {
        barter: filterContextData.paymentOptions.barter,
        brand: filterContextData.brandId?.brand,
        min_price: filterContextData.minPrice,
        max_price: filterContextData.maxPrice,
        brand_model: filterContextData.checkedModelsIds,
        city: filterContextData.checkedCityIds, // Todo: Uncomment or remove this line based on your requirement
        fuel_type: filterContextData.checkedFuelTypeIds,
        is_crashed: filterContextData.paymentOptions.noPunctuation
          ? !filterContextData.paymentOptions.noPunctuation
          : null,
        is_painted: filterContextData.paymentOptions.notColored
          ? !filterContextData.paymentOptions.notColored
          : null,
        for_spare_parts: filterContextData.paymentOptions.accidentalCars,
        gear: filterContextData.checkedGearIds,
        loan: filterContextData.paymentOptions.credit,
        max_engine_power: filterContextData.maxPower,
        min_engine_power: filterContextData.minPower,
        max_mileage: filterContextData.maxMileage,
        min_mileage: filterContextData.minMileage,
        max_vehicle_engine_volume: filterContextData.selectedVolumeMax,
        min_vehicle_engine_volume: filterContextData.selectedVolumeMin,
        max_vehicle_year: filterContextData.selectedMaxYearManufactured,
        min_vehicle_year: filterContextData.selectedYearManufactured,
        number_of_seats: filterContextData.checkedSeatsNumberIds,
        price_currency: filterContextData.selectedCurrency,
        vehicle_category: filterContextData.checkedBanTypeIds,
        vehicle_color: filterContextData.checkedColorIds,
        vehicle_market: filterContextData.checkedMarketAssembledIds,
        vehicle_prior_owner: filterContextData.checkedOwnersNumberIds,
        vehicle_status: filterContextData.selectedType,
        vehicle_transmission: filterContextData.checkedGearBoxIds,
        ownership_type: filterContextData.selectedCarType,
        features: filterContextData.featuresIds,
      };

      const config = {
        method: "GET",
        url: "https://kibcar.com/api/announcements/filter",
        params: data,
      };

      axios(config)
        .then(function (response) {
          setPremiumAds(response.data.premiumAnnouncements);
          setAds(response.data.announcements);
          setAdsCount(
            response.data.announcementsCount +
              response.data.premiumAnnouncementsCount
          );
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container mt-[30px]">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-12 gap-[30px] ">
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Brand />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Model />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Type />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <City />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Price />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <div className="flex justify-between h-full ">
              <PaymentCurrency />
              <PaymentType
                label="Credit"
                type="credit"
                name="paymentType"
                setPaymentOptions={setPaymentOptions}
              />
              <PaymentType
                label="Barter"
                type="barter"
                name="paymentType"
                setPaymentOptions={setPaymentOptions}
              />
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <BanType />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <div className="flex justify-between h-full gap-6">
              <div className="flex-1">
                <YearManufacturer />
              </div>
              <div className="flex-1">
                <MaxYearManufacturer />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid grid-cols-12 gap-[30px] mt-[30px]  ${
            moreFilters ? " transition-all grid" : "hidden"
          }`}
        >
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Color />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <FuelType />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Gear />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <GearBox />
          </div>
          <div className="xl:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <div className="flex justify-between h-full gap-6">
              <div className="flex-1">
                <VolumeMin />
              </div>
              <div className="flex-1">
                <VolumeMax />
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Power />
          </div>
          <div className="xl:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Mileage />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <CarType />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <OwnersNumber />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <SeatsNumber />
          </div>
          <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 h-[60px]">
            <Market />
          </div>
          <div className="col-span-12 h-[60px] flex gap-x-[30px]">
            <PaymentType
              label="There is no punctuation"
              type="noPunctuation"
              name="noPunctuation"
              setPaymentOptions={setPaymentOptions}
            />
            <PaymentType
              label="Not colored"
              type="notColored"
              name="notColored"
              setPaymentOptions={setPaymentOptions}
            />
            <PaymentType
              label="Accidental cars only"
              type="accidentalCars"
              name="accidentalCars"
              setPaymentOptions={setPaymentOptions}
            />
          </div>
          <div className="col-span-12 mt-12">
            <div className="flex items-center justify-between">
              <span className="font-primary text-primary text-[16px] inline-block min-w-[130px]">
                Vehicle supply
              </span>
              <hr className="h-[1px] w-full bg-[#e2e2e2]" />
            </div>
          </div>
          <VehicleFeatures />
        </div>
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12  mt-[70px] ">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap md:gy-0 gap-y-4 ">
              <span className="font-primary text-primary text-[16px] inline-block ">
                <h2 className="flex items-center font-bold text-primary text-[14px] md:text-[16px] font-primary">
                  Today :{" "}
                  <Link className="ml-1 font-primary text-link">
                    {adsCount} Ads
                  </Link>
                </h2>
              </span>
              <div className="flex flex-wrap items-center md:flex-nowrap md:gy-0 gap-y-4 ">
                <div className="flex items-center">
                  <button className="color-red font-primary text-[16px] font-normal mr-7">
                    Rest
                  </button>
                  <button
                    onClick={handleMoreFilters}
                    className="color-red font-primary text-[16px] font-normal flex items-center "
                  >
                    More Filters{" "}
                    <img
                      className="ml-[10px]"
                      src={moreFilters ? chevronTop : chivronBottom}
                      alt="chevron top"
                    />
                  </button>
                </div>
                <div>
                  <button
                    onClick={showFilterPayload}
                    className="text-white rounded-md shadow-lg bg-red py-[14px] px-[20px] font-primary text-[16px] font-medium md:ml-14 ml-[20px] flex items-center "
                  >
                    <img
                      className="mr-[10px]"
                      src={notifiedIcon}
                      alt="notified icon"
                    />
                    Shows ads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {premiumAds.length > 0 && (
        <VipAnnouncement
          announcements={premiumAds}
          title={"Premium Announcements"}
        />
      )}
      {ads.length && (
        <VipAnnouncement announcements={ads} title={"Announcements"} />
      )}

      {/* {ads && <RecentAnnouncement announcements={ads} />} */}
      {/* {premiumAds && <PremiumAds premiumAds={premiumAds} />} */}
    </main>
  );
}

export default Homepage;
