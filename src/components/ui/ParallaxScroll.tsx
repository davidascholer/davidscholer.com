/**
 * Dependencies:
 * npm i motion clsx tailwind-merge
 */
"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const ScrollImage = ({ src }: { src: string }) => (
  <Image
    src={src}
    className="h-80 object-center object-fill w-48 rounded-lg gap-10 overflow-hidden"
    height="400"
    width="400"
    alt="thumbnail"
  />
);

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full border-primary rounded-lg border-2",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-3 items-start max-w-5xl mx-auto sm:gap-10 gap-2 py-2 sm:py-40 px-2 sm:px-10"
        ref={gridRef}
      >
        <div className="grid sm:gap-10 gap-2">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <ScrollImage src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid sm:gap-10 gap-2">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <ScrollImage src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid sm:gap-10 gap-2">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <ScrollImage src={el} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
