import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () => {
  return (
    <>
      <div className="flex max-w-[602px]">
        <div className="h-12 border border-slate-200 rounded-xl pr-3 py-2 flex items-center justify-between w-full">
          <select className="bg-[#E2EEFF] focus:outline-none h-12 w-[77px] px-4 rounded-xl appearance-none">
            <option value="" selected>
              All
            </option>
          </select>

          <input
            type="text"
            className="border-none px-4 focus:outline-none w-full"
            placeholder="search product..."
          />
          <IoSearchOutline size={22} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
