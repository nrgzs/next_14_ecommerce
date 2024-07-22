'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import SpecialsTitle from './SpecialsTitle';

export default function SpecialProducts({ data }) {
  const [filteredProducts, setFilteredProducts] = useState(
    data.map((item) => item.products).flat()
  );

  const handleFilter = (category) => {
    const [filtered] = data.filter((item) => category === item.title);
    setFilteredProducts(filtered.products);
  };
  return (
    <div>
      <div className="flex flex-wrap flex-col lg:flex-row justify-center lg:justify-between items-center">
        <SpecialsTitle />
        <div className="flex  justify-center items-center ">
          <button
            onClick={() =>
              setFilteredProducts(data.map((item) => item.products).flat())
            }
            className="px-4 py-2  w-26 h-14 text-sm  bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  text-gray-500 rounded-l-2xl mr-[-5px] hover:text-gray-700  focus:text-gray-700 transition duration-300"
          >
            Hamisi
          </button>
          {data &&
            data.slice(1).map((item) => {
              return (
                <button key={item.title}
                  onClick={() => handleFilter(item.title)}
                  className="text-sm px-4 py-2 w-26 h-14 bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  text-gray-500 rounded-r-2xl ml-[-10px] hover:text-gray-700   focus:text-gray-700 transition duration-300"
                >
                  {item.title}
                </button>
              );
            })}
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-center items-center gap-y-36 gap-x-16">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.name} data={product} />
        ))}
      </div>
    </div>
  );
}
