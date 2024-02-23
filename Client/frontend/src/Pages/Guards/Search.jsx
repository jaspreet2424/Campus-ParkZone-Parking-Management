import React from "react";
import GuardNavbar from "./GuardNavbar";

function Search() {
  return (
    <>
      <GuardNavbar></GuardNavbar>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 pt-14 pb-20 bg-slate-600">
            <h1 className="my-6 text-center text-4xl font-bold text-slate-900">Search</h1>
          <div className="search-filter ">
            <div className="w-full flex px-10">
              <input type="text" className="search w-full px-5 text-xl rounded-l-md focus:outline-none" />
              <button className="bg-green-500 px-4 py-2 text-xl font-bold text-white rounded-r-md flex items-center">
                Search
                <i class="fa-solid fa-magnifying-glass ml-2 text-md rotate-90"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
