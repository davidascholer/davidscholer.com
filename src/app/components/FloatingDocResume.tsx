import { FloatingDock } from "@/components/ui/FloatingDock";
import { IconFileTypePdf } from "@tabler/icons-react";

export default function FloatingDockResume() {
  const links = [
    {
      title: "Resume (PDF)",
      icon: (
        <IconFileTypePdf className=" text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/david_scholer_resume.pdf",
    },
    // {
    //   title: "Resume (Text)",
    //   icon: (
    //     <IconFileTypeTxt className=" text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/david_scholer_resume.txt",
    // },
  ];
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
