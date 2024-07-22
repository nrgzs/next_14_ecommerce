import Option1 from '../../../../public/icons/avatar.svg';
import Option2 from '../../../../public/icons/Heart.svg';
import Option3 from '../../../../public/icons/Buy.svg';
import Option4 from '../../../../public/icons/scales.svg';

export default function Options() {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex justify-center items-center w-10 h-10  rounded-md bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5] ">
        <Option1 className="text-black dark:text-white" />
      </div>
      <div className=" flex justify-center items-center w-10 h-10 rounded-md bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5] ">
        <Option2 className="text-black dark:text-white" />
      </div>
      <div className="flex justify-center items-center  w-10 h-10  rounded-md bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5] ">
        <Option3 className="text-black dark:text-white" />
      </div>
      <div className=" flex justify-center items-center w-10 h-10  rounded-md bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5] ">
        <Option4 className="text-black dark:text-white" />
      </div>
    </div>
  );
}
