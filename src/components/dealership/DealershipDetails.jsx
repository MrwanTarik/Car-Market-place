// DealershipDetails.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "../Cars/CarCard";
import AdDetails from "./AdDetails";
function DealershipDetails() {
  const [dealership, setDealership] = useState(null);
  const { dealershipId } = useParams();
  const [adContent, setAdContent] = useState(null);
  const announcementNumbers = dealership?.cars.length;
  const dealershipName = dealership?.name;
  useEffect(() => {
    async function fetchDealershipDetails() {
      try {
        const response = await fetch(
          `http://localhost:3001/dealershipOwners/${dealershipId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDealership(data);
      } catch (error) {
        console.error("Error fetching dealership details:", error);
      }
    }
    const fetchAdContent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/dealershipOwners/${dealershipId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const adData = await response.json();
        setAdContent(adData);
      } catch (error) {
        console.error('Error fetching ad content:', error);
      }
    };
    fetchAdContent();
    fetchDealershipDetails();
  }, [dealershipId]);
  if (!dealership) return <div>Loading...</div>;
  return (
    <div>
      <div className="container">
        <div className="py-[30px]">
          {adContent.ads.map((ad) => (
            <AdDetails announcementNumbers={announcementNumbers} key={ad.id} ad={ad}  dealershipName = {dealershipName}/>
          ))}
        </div>
        <div className="grid grid-cols-12 mt-[60px] gap-[30px]">
          {dealership.cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealershipDetails;
