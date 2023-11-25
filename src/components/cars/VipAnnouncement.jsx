import useFetchData from "./useFetchCars";
import CarCard from "./CarCard";
function VipAnnouncement() {
  const { data, loading, error } = useFetchData(`vipAnnouncement`);
  if (loading) return <p>Loading...</p>;
  return (
    <div className="mt-[80px]">
      <h1 className="font-secondary text-[26px] font-bold leading-8 text-primary ">
        {" "}
        VIP ANNOUNCEMENTS
      </h1>
      <div className="grid grid-cols-12 mt-[60px] gap-[30px]">
        {data.map((car) => (
          <>
            <CarCard key={car.id} car={car} />
          </>
        ))}
      </div>
    </div>
  );
}

export default VipAnnouncement;
