import { API_CLIENT as apiClient } from "lib/axios/apiClient";
import { ICity } from "lib/interfaces";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CityCard from "./CityCard";

const CitiesSection = () => {
  const [cities, setCities] = useState<ICity[]>(new Array(6));
  const [hasMoreCities, setHasMoreCities] = useState(true);
  const [page, setPage] = useState(0);

  const fetchCities = () => {
    console.log("fetchCities called");
    /*  apiClient
      .get<ICity[]>("/cities", {
        params: {
          page,
        },
      })
      .then(({ data }) => {
        setCities(cities.concat(data));
        setPage(page + 1);
      })
      .catch((err) => console.error({ err }));
      */
  };

  return (
    <section className="min-h-screen">
      <InfiniteScroll
        dataLength={cities.length}
        next={fetchCities}
        hasMore={hasMoreCities}
        loader={<h4>Loading...</h4>}
        endMessage={<p>The end.</p>}
      >
        {cities.map((city) => (
          <CityCard />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default CitiesSection;
