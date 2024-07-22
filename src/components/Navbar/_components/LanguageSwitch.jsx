import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const LanguageSwitch = () => {
  const languages = ['Aze', 'En'];
  const [selectedLanguage, setSelectedLanguage] = useState('Aze');

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={handleToggle}
        className=" text-gray-600 px-4 py-2 flex items-center"
      >
        <span className="mr-2 ">{selectedLanguage}</span>
        {isOpen ? (
          <IoIosArrowUp className="w-3 h-5" />
        ) : (
          <IoIosArrowDown className="w-3 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-white dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  bg-opacity-90 shadow-lg z-10">
          <ul className="py-1">
            {languages.map((language) => (
              <li
                key={language}
                onClick={() => {
                  handleSelect(language);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-black dark:text-white hover:bg-gray-200 cursor-pointer"
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
