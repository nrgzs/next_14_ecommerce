import React from 'react';
import Image from 'next/image';
import StarSvg from './../../../../public/icons/Star.svg';
import CommentSvg from './../../../../public/icons/Chat.svg';
import HeartSvg from './../../../../public/icons/Heart.svg';
import Buy2Svg from './../../../../public/icons/Buy2.svg';
import Scale from './../../../../public/icons/scales.svg';

const ProductCard = ({ data }) => {
  return (
    <div className=" flex items-center justify-center w-[300px] h-96  relative ">
      <div className=" shadow-md rounded-2xl max-w-[200px] min-h-[200px] p-2 bg-white  absolute top-[-60px] ">
        <Image
          src={data.image}
          alt="img"
          width={200}
          height={200}
          className="rounded-2xl"
        />
        <div className="absolute top-2 right-2 bg-slate-100 dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  p-1 rounded-full ">
          <Scale />
        </div>
        <div className="absolute top-2 left-2 bg-red-500 p-2 font-medium text-white text-sm rounded-xl ">
          30 %
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-2 pt-[200px] h-[400px] rounded-2xl bg-gray-100 dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  p-5 ">
        <div className="flex gap-2">
          <div className="flex gap-2 items-center justify-center">
            <StarSvg />
            4.6
          </div>
          <div className="flex gap-2 items-center justify-center">
            <CommentSvg />6 Rey
          </div>
        </div>
        <p className=" w-[300px] h-16 overflow-clip  pb-4 truncate">
          {data.name}
        </p>

        <div className="flex pb-3">
          <div className="pr-2 border-r-2 border-solid border-gray-300">
            <p className="line-through  text-gray-500">{data.price} ₼</p>
            <p className="truncate">
              {(data.price - Number(data.discount)).toFixed(2)} ₼
            </p>
          </div>
          <div className="pl-2">
            <p className="  text-gray-500">{data.perMonth?.month} ay</p>
            <p>{data.perMonth?.price} ₼</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <button className="flex w-full gap-2 bg-gray-200 dark:bg-[#3F3F3F] dark:text-[#F5F5F5]   p-2 rounded-lg">
            <Buy2Svg />
            Sebete elave et
          </button>

          <button className="bg-gray-200 dark:bg-[#3F3F3F] dark:text-[#F5F5F5]  p-2 rounded-lg">
            {data.is_favorite ? (
              <HeartSvg className="text:red" />
            ) : (
              <HeartSvg />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
