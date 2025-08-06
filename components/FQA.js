"use client"
import React, { useState } from 'react';

const frequent = [
  {
    id: "1",
    question: "Q1. Lorem ipsum dolor sit amet consectetur?",
    extra: "+"
  },
  {
    id: "2",
    question: "Q2. Lorem ipsum dolor sit amet consectetur?",
    extra: "+"
  },
  {
    id: "3",
    question: "Q3. Lorem ipsum dolor sit amet consectetur?",
    extra: "+"
  },
  {
    id: "4",
    question: "Q4. Lorem ipsum dolor sit amet consectetur?",
    extra: "+"
  },
  {
    id: "5",
    question: "Q5. Lorem ipsum dolor sit amet consectetur?",
    extra: "+"
  }
];

const FQA = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prevId => prevId === id ? null : id);
  };

  return (
    <div className="min-h-sceen md:p-10 sm:p-5 rounded-lg shadow-lg bg-white dark:bg-black dark:text-white ">
      <h1 className="text-center text-4xl mb-5 justify-center text-2xl text-pink-800">
        Frequently asked questions
      </h1>
      {frequent.map((item) => (
        <div key={item.id} className="border-b text-center justify-center border-gray-200 p-4 mt-10 ml-10 mr-10">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(item.id)}>
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span className="text-xl font-bold">{openId === item.id ? '-' : '+'}</span>
          </div>
          {openId === item.id && (
            <p className="mt-4 text-gray-600 items-start">
              lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. 
              Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing 
              elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus 
              scelerisque amet velit rhoncus metus morbi. 
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FQA;