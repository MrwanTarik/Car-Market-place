import useFetchData from "../components/Cars/useFetchCars";
import DealershipCard from "../components/dealership/DealershipCard";
function DealershipOwners() {
  const { data, loading, error } = useFetchData(`dealershipOwners`);
  if (loading) return <div>Loading...</div>;
  return (
    <div className="mt-[30px]">
      <div className="container">
        <h1 className="font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary mb-[60px]">
          {" "}
          OFFICIAL REPRESENTATIVES
        </h1>
        <div className="grid grid-cols-12 gap-[30px]">
          {data.map((dealership) => (
            <DealershipCard key={dealership.id} dealership={dealership} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealershipOwners;
