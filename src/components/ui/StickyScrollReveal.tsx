/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Dependencies:
 * npm i motion clsx tailwind-merge
 */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => (index * 0.9) / cardLength
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#716da0", // slate-900
    "#4f91a9", // black
    "#716da0", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #5f9da0, #304f50)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #304f50, #afced0)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #afced0, #5f9da0)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[40rem] justify-center lg:space-x-4 overflow-y-auto rounded-md p-2 sm:p-10 w-full bg"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 pb-8">
        <div className="flex-1">
          <h2 className="text-primary font-bold text-4xl text-center mb-12 text-shadow-sm">
            Front End Skills
          </h2>

          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white dark:bg-[#222] lg:block ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
        {/* <div className="flex flex-1 h-full w-full bg-blue-200 justify-center items-center">hi</div> */}
      </div>
    </motion.div>
  );
};
