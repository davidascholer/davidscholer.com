"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {
  IconFileCv,
  IconMessage,
  IconCode,
  IconUsers,
  IconTerminal,
} from "@tabler/icons-react";
export default function FloatingNavComponent() {
  const navItems = [
    {
      name: "Highlighted Skills",
      link: "#highlights",
      icon: <IconUsers className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Code Sample",
      link: "#code-sample",
      icon: <IconCode className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "DevOps",
      link: "#devops",
      icon: (
        <IconTerminal className="h-6 w-6 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Resume",
      link: "#resume",
      icon: <IconFileCv className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
