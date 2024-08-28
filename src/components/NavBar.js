import Link from "next/link";
import React from "react";

const NavBar = () => {
  const linkClasses =
    "px-1 border border-gray-500 rounded-sm hover:text-blue-700 hover:border-blue-700";
  return (
    <div className="flex gap-2 justify-center flex-wrap h-20 items-center  bg-blue-300 shadow-lg">
      <Link
        href="/"
        className={`${linkClasses} bg-black text-white  px-4 py-1`}
      >
        Home
      </Link>
      <Link href="/singleton" className={linkClasses}>
        Singleton
      </Link>
      <Link href="/factory" className={linkClasses}>
        Factory
      </Link>
      <Link href="/prototype" className={linkClasses}>
        Prototype
      </Link>
      <Link href="/observer" className={linkClasses}>
        Observer
      </Link>
      <Link href="/proxy" className={linkClasses}>
        Proxy
      </Link>
    </div>
  );
};

export default NavBar;
