"use client";

import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function BackgroundGradientComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center w-full px-8 my-8">
      <BackgroundGradient className="rounded-[22px] w-full mx-auto text-white">
        {children}
      </BackgroundGradient>
    </div>
  );
}
