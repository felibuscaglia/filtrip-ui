import { API_CLIENT as apiClient } from "lib/axios/apiClient";
import { ICity } from "lib/interfaces";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CityCard from "./CityCard";

const CitiesSection = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [hasMoreCities, setHasMoreCities] = useState(true);
  const [page, setPage] = useState(0);

  const fetchCities = () => {
    apiClient
      .get<ICity[]>("/cities", {
        params: {
          page,
          limit: 6,
          attributes: "name,urlSlug,region",
        },
      })
      .then(({ data }) => {
        setCities(cities.concat(data));
        setPage(page + 1);
        setHasMoreCities(!!data.length);
      })
      .catch((err) => console.error({ err }));
  };

  return (
    <section className="min-h-screen">
      <InfiniteScroll
        dataLength={cities.length}
        next={fetchCities}
        hasMore={hasMoreCities}
        loader={<h4>Loading...</h4>}
        endMessage={<p>The end.</p>}
        className="grid grid-cols-3 gap-y-14"
      >
        {(cities.length ? cities : Array(6).fill(null)).map((city, i) => (
          <CityCard city={city} key={`city-${city ? city?.name : i}`} trending={i < 6} />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default CitiesSection;
