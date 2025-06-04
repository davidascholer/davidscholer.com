"use client";

import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";

const words = [
  {
    text: "The",
  },
  {
    text: "Digital",
  },
  {
    text: "Resume",
  },
  {
    text: "Of",
  },
  {
    text: "David Scholer",
    className: "text-primary dark:text-primary",
  },
];

export default function TypewriterEffectComponent() {

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] z-100">
      <TypewriterEffectSmooth
        words={words}
      />
    </div>
  );
}
