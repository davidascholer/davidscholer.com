import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  IconBrandGithubFilled,
  // IconBrandYoutubeFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export default function FloatingDockComponent() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithubFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/davidascholer",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/david-scholer/",
    },
    // {
    //   title: "YouTube",
    //   icon: (
    //     <IconBrandYoutubeFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://www.youtube.com/@hackrec9235",
    // },
  ];
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
