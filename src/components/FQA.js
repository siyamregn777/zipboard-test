"use client"
import React, { useState } from 'react';
import { frequent } from '@/components/Base.js';

const FQA = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prevId => prevId === id ? null : id);
  };

  return (
    <section id="fqa">
      <div className="min-h-screen md:p-10 sm:p-5 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300">
        <h1 className="text-center mb-5 text-3xl text-pink-800 dark:text-pink-400">
          Frequently asked <span className="text-pink-500">questions</span>
        </h1>
        {frequent.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-300 dark:border-gray-700 p-4 mx-10 mt-6 text-black dark:text-white transition-colors"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(item.id)}
            >
              {/* Fixed: Added dark:text-white */}
              <h3 className="text-lg text-black dark:text-white font-semibold">{item.question}</h3>
              <span className="text-xl font-bold text-pink-500 dark:text-pink-400">
                {openId === item.id ? "-" : "+"}
              </span>
            </div>
            {openId === item.id && (
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-left">
                Lorem ipsum dolor sit amet consectetur. Enim ut justo quis
                lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id.
                At consequat molestie lorem integer adipiscing elementum eros
                dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis
                lectus scelerisque amet velit rhoncus metus morbi.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FQA;