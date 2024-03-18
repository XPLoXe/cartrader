import cars from "@/data/cars.json";
import makes from "@/data/makes.json";
import listings from "@/data/listings.json";

const useCars = () => {
  return {
    cars,
    makes,
    listings,
  };
};

export default useCars;
