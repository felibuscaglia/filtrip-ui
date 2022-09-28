import SEARCH_ICON from "assets/icons/search.png";

const InputWithSearchIcon = () => {
  return (
    <div className="flex border p-2 w-6/12 rounded-3xl">
      <img src={SEARCH_ICON} className="h-6 mr-2" />
      <input className="bg-transparent w-full font-text" placeholder="Search for cities around the world..." />
    </div>
  );
};

export default InputWithSearchIcon;
