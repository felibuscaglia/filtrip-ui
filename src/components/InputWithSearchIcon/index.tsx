import SEARCH_ICON from "assets/icons/search.png";

interface IInputWithSearchIconProps {
  onChange: (val: string) => void;
}

const InputWithSearchIcon = ({ onChange }: IInputWithSearchIconProps) => {
  let inputChangeTimeout: NodeJS.Timeout;

  const handleInputChange = (val: string) => {
    clearTimeout(inputChangeTimeout);

    inputChangeTimeout = setTimeout(() => {
      onChange(val.trim());
    }, 500);
  };

  return (
    <div className="flex border p-2 w-6/12 rounded-3xl">
      <img src={SEARCH_ICON} className="h-6 mr-2" />
      <input
        className="bg-transparent w-full font-text"
        placeholder="Search for cities around the world..."
        onChange={({ target }) => handleInputChange(target.value)}
      />
    </div>
  );
};

export default InputWithSearchIcon;
