import Link from "next/link";
import React from "react";

const NavBar = () => {
  const linkClasses =
    "px-1 border border-gray-500 rounded-sm hover:text-blue-400 hover:border-blue-600";
  return (
    <div className="flex gap-2 justify-center flex-wrap h-32 items-center mt-8">
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
    </div>
  );
};

export default NavBar;
