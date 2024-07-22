import SearchIcon from './../../../../public/icons/Search.svg';

const Search = () => {
  return (
    <div className="relative w-full ">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 px-4 py-2 text-gray rounded-r-lg focus:text-red-500"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
