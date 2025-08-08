"use client";
import React, { useState } from "react";

import { accordionItems } from "@/components/Base.js";

const FaqLast = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen md:p-10 sm:p-5 rounded-lg shadow-lg bg-black text-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <h1 className="text-center text-4xl mb-5 text-blue-700 dark:text-blue-400">
        Frequently Asked  <span className="text-pink-400">questions</span>
      </h1>
      <div className="m-10 p-5 pl-10 rounded-lg shadow-lg  bg-black text-white dark:bg-gray-900 transition-colors duration-300">
        {accordionItems.map((item) => (
          <div key={item.id} className="border-b border-gray-300 dark:border-gray-700 p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(item.id)}
            >
              <h3 className="text-lg font-semibold !text-white ">{item.title}</h3>
              <span className="text-2xl font-bold  text-blue-500 dark:text-blue-300">
                {openId === item.id ? "-" : "+"}
              </span>
            </div>

            {openId === item.id && (
              <p className="mt-3 text-white dark:text-gray-300 transition-all duration-300">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqLast;
