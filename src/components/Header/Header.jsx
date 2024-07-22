'use client'
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Search from './_components/Search';
import LocationBar from './_components/Location';
import Options from './_components/Options';
import CatSvg from '../../../public/icons/Category.svg';

export default function Header() {
  return (
    <div className="flex ew-full my-3 gap-3 items-center">
      <Image alt="logo" src={Logo} width={80} height={80} />
      <button className=" flex px-4 justify-center gap-3 items-center w-48 h-12 bg-black font-semibold text-white rounded-full">
        <CatSvg className="text-white" /> Katalog
      </button>

      <Search />
      <div className="hidden md:flex md:gap-2 ">
        <LocationBar />
        <Options />
      </div>
    </div>
  );
}
