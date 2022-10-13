import FIRE_ICON from "assets/icons/fire.png";

interface ITrendingStickerProps {
  trending: boolean;
}

const TrendingSticker = ({ trending }: ITrendingStickerProps) => {
  if (!trending) {
    return null;
  }

  return (
    <div className="flex flex-row items-center bg-gray-200 h-min pb-1 pt-0.5 px-3 rounded-2xl">
      <img src={FIRE_ICON} className="h-5" />
      <span className="font-text text-sm mt-1 ml-0.5">Trending</span>
    </div>
  );
};

export default TrendingSticker;
