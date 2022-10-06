import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { ICity } from "lib/interfaces";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface ICityCardProps {
  city: ICity | null;
  trending: boolean;
}

const LINKS_CLASSNAMES = "w-max	hover:text-white hover:bg-black";

const CityCard = ({ city, trending }: ICityCardProps) => {
  const MAIN_PHOTO = city?.photos[0]?.url ?? null;

  const CITY_COUNTRY = city?.country;

  return (
    <div className="flex items-center justify-center">
      <div className="w-4/5">
        {MAIN_PHOTO ? (
          <div
            className={styles.cityPhoto}
            style={{ backgroundImage: `url(${MAIN_PHOTO})` }}
          />
        ) : (
          <Skeleton height={232} />
        )}
        <div className="mt-3 flex flex-row justify-between">
          <div>
            {city?.name ? (
              <Link to={`/city/${city.urlSlug}`}>
                <h3 className={"font-title text-xl " + LINKS_CLASSNAMES}>
                  {city.name}
                </h3>
              </Link>
            ) : (
              <Skeleton height={22.5} width={"50%"} />
            )}
            {city?.region ? (
              <div className="h-4">
                <span
                  className={
                    "font-text text-sm cursor-pointer " + LINKS_CLASSNAMES
                  }
                >
                  {city.region}
                </span>
                <span className="font-text text-sm">, </span>
                <span
                  className={
                    "font-text text-sm cursor-pointer " + LINKS_CLASSNAMES
                  }
                >
                  {CITY_COUNTRY?.name}
                </span>
              </div>
            ) : (
              <Skeleton height={20} width={"75%"} />
            )}
            {CITY_COUNTRY?.continent ? (
              <span
                className={
                  "font-text text-sm cursor-pointer " + LINKS_CLASSNAMES
                }
              >
                {CITY_COUNTRY.continent}
              </span>
            ) : (
              <Skeleton height={20} width={"40%"} />
            )}
          </div>
          {trending && <span className="font-text text-sm bg-gray-200 h-min py-1 px-3 rounded-2xl">🔥 Trending</span>}
        </div>
      </div>
    </div>
  );
};

export default CityCard;
