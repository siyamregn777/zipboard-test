"use client";
import React, { useState } from 'react';
import {accordionItems} from "@/components/Base.js"


const Accordion = () => {
  const [openItems, setOpenItems] = useState(
    accordionItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  const toggle = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen m-3 p-3">
      <div className="space-y-4">
        {accordionItems.map((item) => (
          <div key={item.id} className="border rounded-lg dark:border-gray-700">
            {/* Header */}
            <div
              className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => toggle(item.id)}
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h2>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {openItems[item.id] ? '−' : '+'}
              </span>
            </div>
            

            {/* Content */}
            {openItems[item.id] && (
              <div className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
