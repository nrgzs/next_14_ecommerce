import Image from 'next/image';

const FeatureCard = ({ data }) => {
  return (
    <div className="flex  w-52 h-52 flex-col justify-center items-center bg-[#F5F5F5] dark:bg-[#2B2B2B] dark:text-[#F5F5F5]  rounded-lg p-4 shadow-md">
      <div className="flex gap-3 w-14 h-14 bg-gray-200 dark:bg-[#616161] dark:text-[#F5F5F5] p-4 rounded-lg justify-center items-center mb-4">
        <Image alt="feature img" width={40} height={40} src={data.icon} className='dark:invert' />
      </div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-[#F5F5F5]">
        {data.title}
      </h3>

      <p className="text-gray-600  dark:text-[#F5F5F5]">
        {data.description}
      </p>
    </div>
  );
};

export default FeatureCard;
