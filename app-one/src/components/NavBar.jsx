import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCollection } from "react-icons/hi";

import { useSideNavCollapsed } from "shell/shellContext";

const NavBar = () => {
  const [collapsed, setCollapsed] = useSideNavCollapsed();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-600">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="static flex items-center justify-between w-full space-x-3 lg:w-auto lg:justify-start">
            <HiOutlineCollection
              className="w-6 h-6 text-white cursor-pointer"
              onClick={() => setCollapsed(!collapsed)}
            />
            <button className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap">
              App One
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item">
                <Link
                  to={""}
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"page2"}
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                >
                  <span className="ml-2">Page 2</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
