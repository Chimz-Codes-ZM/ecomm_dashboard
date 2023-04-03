import React from "react";

function TopCards() {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white dark:bg-slate-800 tranition duration-500 ease-in flex justify-between w-full border p-4 rounded-lg ">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold dark:text-white transition duration-500 ease-in">$7,846</p>
          <p className="text-gray-600 dark:text-gray-200">Daily Revenue</p>
        </div>
        <p className="flex bg-green-200 justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white dark:bg-slate-800 tranition duration-500 ease-in flex justify-between w-full border p-4 rounded-lg ">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold dark:text-white transition duration-500 ease-in">$1,437,846</p>
          <p className="text-gray-600 dark:text-gray-200">YTD Revenue</p>
        </div>{" "}
        <p className="flex bg-green-200 justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+11%</span>
        </p>
      </div>
      <div className=" bg-white dark:bg-slate-800 tranition duration-500 ease-in flex justify-between w-full border p-4 rounded-lg ">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold dark:text-white transition duration-500 ease-in">11,437</p>
          <p className="text-gray-600 dark:text-gray-200">Customers</p>
        </div>{" "}
        <p className="flex bg-green-200 justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+17%</span>
        </p>
      </div>
    </div>
  );
}

export default TopCards;
