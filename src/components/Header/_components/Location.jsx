import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const LocationBar = () => {
  const places = ['Baki seheri','Sumqayit seheri', 'Abseron rayonu'];
  const [selectedplace, setSelectedplace] = useState('baki seheri');

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (place) => {
    setSelectedplace(place);
  };

  return (
    <div className=" flex w-52 relative  text-left  bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  rounded-md">
      <button
        onClick={handleToggle}
        className=" w-full text-gray-400 px-4 py-2 flex justify-between items-center"
      >
        <span className="mr-2">{selectedplace}</span>
        {isOpen ? (
          <IoIosArrowUp className="w-3 h-5" />
        ) : (
          <IoIosArrowDown className="w-3 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-[#2B2B2B] bg-opacity-90 shadow-lg z-10">
          <ul className="py-1">
            {places.map((place) => (
              <li
                key={place}
                onClick={() => {
                  handleSelect(place);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-black dark:text-white hover:bg-gray-300 cursor-pointer"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationBar;
