"use client";
import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: "Q1. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    id: 2,
    title: "Q2. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    id: 3,
    title: "Q3. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    id: 4,
    title: "Q4. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    id: 5,
    title: "Q5. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
];

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
    <div className="min-h-screen m-3 p-3 dark:bg-black dark:text-white">
      <div className="space-y-4 dark:bg-black dark:text-white">
        {accordionItems.map((item) => (
          <div key={item.id} className="border rounded-lg dark:bg-black dark:text-white">
            {/* Header */}
            <div
              className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => toggle(item.id)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <span className="text-2xl font-bold">
                {openItems[item.id] ? '−' : '+'}
              </span>
            </div>

            {/* Content */}
            {openItems[item.id] && (
              <div className="p-4 bg-white text-gray-700">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
