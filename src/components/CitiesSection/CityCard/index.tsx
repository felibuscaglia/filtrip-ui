import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { ICity } from "lib/interfaces";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface ICityCardProps {
  city: ICity | null;
}

const CityCard = ({ city }: ICityCardProps) => {
  const MAIN_PHOTO = city?.photos[0]?.url ?? null;

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
        <div className="mt-3">
          {city?.name ? (
            <Link to={`/city/${city.urlSlug}`}>
              <h3 className="font-title text-xl w-max	hover:text-white hover:bg-black">
                {city.name}
              </h3>
            </Link>
          ) : (
            <Skeleton height={22.5} width={"50%"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CityCard;
