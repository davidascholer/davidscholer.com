"use client";
import { Button } from "@/components/ui/MovingBorder";
import { cn } from "@/lib/utils";

export default function MovingBorderComponent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="mt-8">
      <Button
        borderRadius="1.75rem"
        className={cn(
          "bg-white dark:bg-[#000] text-black dark:text-white border-neutral-200 dark:border-slate-800",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
