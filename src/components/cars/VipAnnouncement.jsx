import useFetchData from "./useFetchCars";
import CarCard from "./CarCard";
function VipAnnouncement({announcements, title}) {
  // const { data, loading, error } = useFetchData(`vipAnnouncement`);
  // if (loading) return <p>Loading...</p>;
  return (
    <div className="mt-[80px]">
      <h1 className="font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary ">
        {" "}
        {title}
      </h1>
      <div className="grid grid-cols-12 mt-[60px] gap-[30px]">
        {announcements.map((car) => (
          <CarCard key={car.id} car={car} id={car.id} />
        ))}
      </div>
    </div>
  );
}

export default VipAnnouncement;
