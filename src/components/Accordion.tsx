"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 max-w-[648px] mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          key={index}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="py-7 border-b border-white/30">
      <div className="flex items-center cursor-pointer" onClick={onClick}>
        <span className="flex-1 text-lg font-bold">
          {question}
        </span>

        <div className="relative h-6 w-6 flex justify-center items-center">
          <motion.div
            initial={{ rotate: '-180deg' }}
            animate={{ rotate: isOpen ? '0deg' : '-180deg' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-white h-[3px] w-4 rounded-full absolute"
          />

          <motion.div
            initial={{ rotate: '270deg' }}
            animate={{ rotate: isOpen ? '0deg' : '270deg' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-white h-[3px] w-4 rounded-full absolute"
          />
        </div>

      </div>

      <motion.div
        className="overflow-hidden mt-4"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
      >
        {answer}
      </motion.div>
    </div>
  )
}

export default Accordion;