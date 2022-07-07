import React from "react";

function Navbar() {
  return (
    <nav className="max-w-[1440px] text-white mt-11">
      <div className=" flex justify-between px-14 items-center sm:flex-row flex-col">
        <div className="">
          <p className="text-bold text-xl">KRYPTO</p>
        </div>
        <div className="">
          <ul className="flex sm:space-x-11 sm:flex-row flex-col items-center justify-center   font-light">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Buy Nfts</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
