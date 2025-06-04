"use client";
import { ContainerScroll } from "@/components/ui/ScrollAnimation";
import SidebarComponent from "./SidebarComponent";

export default function ScrollAnimationComponent() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mb-8">
              Need more than Api apps? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                No problem!
              </span>
            </h1>
          </>
        }
      >
        <SidebarComponent />
      </ContainerScroll>
    </div>
  );
}
