"use client"
import React, { useState } from 'react';

const frequent = [
  {
    id: "1",
    question: "Q1. Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    question: "Q1. Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },{
    id: "3",
    question: "Q1. Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },{
    id: "4",
    question: "Q1. Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },{
    id: "5",
    question: "Q1. Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];

const FaqLast = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen md:p-10 sm:p-5 rounded-lg shadow-lg dark:bg-black dark:text-white bg-black text-white">
      <h1 className="text-center text-4xl mb-5 text-blue-500">
        Frequently Asked Questions
      </h1>
      <div className="m-10 p-5 pl-10 rounded-lg shadow-lg bg-gray-900">
        {frequent.map((item) => (
          <div key={item.id} className="border-b border-gray-700 p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(item.id)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span className="text-2xl font-bold text-blue-400">
                {openId === item.id ? '-' : '+'}
              </span>
            </div>

            {openId === item.id && (
              <p className="mt-3 text-gray-300 transition-all duration-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqLast;