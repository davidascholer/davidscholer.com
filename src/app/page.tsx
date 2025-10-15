"use client";

import FloatingNavComponent from "./components/FloatingNavbarComponent";
import TypewriterEffectComponent from "./components/TypeWriteEffectComponent";
import Image from "next/image";
import MovingBorderComponent from "./components/MovingBorderComponent";
import FormComponent from "./components/FormComponent";
import StickyScrollRevealComponent from "./components/StickyScrollRevealComponent";
import BackgroundGradientComponent from "./components/BackgroundGradientComponent";
import GridSmallBackground from "@/components/ui/GridSmallBackground";
import {
  IntroHeroSection,
  VerticalListHeroSection,
} from "@/components/ui/HeroSections";
import CoverLetterComponent from "./components/CoverLetterComponent";
import ExperienceListComponent from "./components/ExperienceListComponent";
import AppleCardsCarouselComponent from "./components/CardCarouselComponent";
// import DillFreshPinComponent from "./components/AnimatedPinComponents/DillFresh";
// import TheMetPinComponent from "./components/AnimatedPinComponents/TheMet";
// import ApiAppComponent from "./components/AnimatedPinComponents/ApiApp";
// import NimbioComponent from "./components/AnimatedPinComponents/Nimbio";
// import VamplitudeComponent from "./components/AnimatedPinComponents/Vamplitude";
import FloatingDockResume from "./components/FloatingDocResume";
import FloatingDockComponent from "./components/FloatingDockComponent";
import CodeBlockComponent from "./components/CodeBlockComponent";
import ScrollAnimationComponent from "./components/ScrollAnimationComponent";
import MacbookScrollComponent from "./components/MacbookScrollComponent";
import WorldMapComponent from "./components/WorldMapComponent";
import ParallaxScrollComponent from "./components/ParallaxScrollComponent";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { CardBody, CardContainer } from "@/components/3dCard";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import AnimatedTestimonialsComponent from "./components/TestimonialsComponent";

const AnimatedHeader = ({
  text,
  className,
  textClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
}) => {
  return (
    <TypewriterEffectSmooth
      cursorClassName="hidden"
      className={cn(
        "w-full text-center justify-center items-center bg-none",
        className
      )}
      words={[
        {
          text: text,
          className: cn(
            "font-bold text-center w-full text-xl min-[385px]:text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-primary",
            textClassName
          ),
        },
      ]}
    />
  );
};

export default function Home() {
  return (
    <div className="pb-24 overflow-hidden">
      <Toaster />
      <div
        className={cn(
          "inset-0 fixed z-[-1] ",
          "[background-size:40px_40px]",
          "[background-image:radial-gradient(#5F9EA0_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#5F9EA0_1px,bg-background dark:bg-neutral-950 antialiased"
        )}
      />
      <FloatingNavComponent />
      <main>
        <GridSmallBackground>
          <TypewriterEffectComponent />
        </GridSmallBackground>
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-2 sm:p-10 w-full">
          <IntroHeroSection />
          <div className="w-full max-w-4xl m-4">
            <button
              className="bg-[#222] text-white cursor-pointer w-full rounded-full p-4 border-white border-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg mx-auto block mb-4 font-semibold"
              onClick={() => {
                window.open("https://vamplitude.com", "_blank");
              }}
            >
              {`View my "Funhouse of Skills" portfolio I did in college at Vamplitude.com`}
            </button>
          </div>

          <div className="w-full border-primary rounded-xl border-2 p-4 shadow-xl white/5">
            <CardContainer className="inter-var">
              <CardBody className="flex flex-col items-center justify-evenly w-full p-2 ">
                <Image
                  src="/seattle.png"
                  alt="Seattle"
                  unoptimized={true}
                  className="rounded-lg max-w-[200px] min-[430px]:max-w-[320px] sm:max-w-sm md:max-w-md"
                  width={1536}
                  height={1024}
                />
                <h2 className="font-bold text-center w-full text-xl md:text-2xl lg:text-3xl text-primary text-nowrap">
                  Seattle, WA
                </h2>
              </CardBody>
            </CardContainer>
            <FloatingDockComponent />
            {/* <div className="video-responsive w-full flex justify-center items-center my-4 px-4">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/rDS9WQv74ug`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div> */}
            <BackgroundGradientComponent>
              <CoverLetterComponent />
            </BackgroundGradientComponent>
          </div>
          <div id="highlights">
            <AnimatedHeader text="Highlights" textClassName="text-sm" />
            <VerticalListHeroSection
              items={[
                "System Design",
                "API Integration",
                "AWS Certified",
                "CI/CD",
                "UI/UX Design",
                "AI Integration",
                "Native Mobile Development",
                "SEO",
                "Authentication",
                "Project Management",
                "Automation Testing",
                "Network Security",
                "Graphic Design",
                "Version Control",
                "Caching",
                "Linting",
                "Bundling",
                "Containers",
              ]}
            />
          </div>
          <MovingBorderComponent>
            <StickyScrollRevealComponent />
          </MovingBorderComponent>
          <AnimatedHeader
            text="Comprehensive Programming Experience"
            textClassName="text-sm"
          />
          <ExperienceListComponent />

          {/* <AnimatedHeader text="Selected Projects" className="mt-12" />

          <div className="max-[350px]:scale-50 max-[350px]:my-[-900px] max-[450px]:scale-75 max-[450px]:my-[-450px] my-10 sm:scale-100 ">
            <ul className="flex flow-row flex-wrap gap-4 sm:gap-24 items-center justify-evenly px-4 sm:p-[50px] ">
              <li className="flex justify-center items-center w-[350px] p-4 min-h-[750px]">
                <NimbioComponent />
              </li>
              <li className="flex justify-center items-center w-[350px] p-4 min-h-[750px]">
                <DillFreshPinComponent />
              </li>
              <li className="flex justify-center items-center w-[350px] p-4 min-h-[750px]">
                <VamplitudeComponent />
              </li>
              <li className="flex justify-center items-center w-[350px] p-4 min-h-[750px]">
                <ApiAppComponent />
              </li>
              <li className="flex justify-center items-center w-[350px] p-4 min-h-[750px]">
                <TheMetPinComponent />
              </li>
            </ul>
          </div> */}

          <AppleCardsCarouselComponent />

          <AnimatedHeader text="Education" />
          <AnimatedTestimonialsComponent />
          <AnimatedHeader text="Contact" className="mt-24" />

          <div id="contact">
            <FormComponent />
          </div>

          <div id="code-sample" className="w-full sm:max-w-4xl">
            <CodeBlockComponent />
          </div>
          <div id="devops" className="w-full max-w-4xl">
            <WorldMapComponent />
            <div id="project-management" className="w-full max-w-4xl">
              <MacbookScrollComponent />
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <div id="multi-device" className="w-full max-w-4xl">
              <ScrollAnimationComponent />
            </div>
            <div id="graphic-design" className="w-full max-w-4xl">
              <h1 className="text-4xl font-semibold text-black dark:text-white mb-8 text-center p-2">
                Experience creating custom logos and vector images helps me
                think like a designer allowing me to work with designers more
                effectively.
              </h1>
              <ParallaxScrollComponent />
            </div>
          </div>
        </div>
        <AnimatedHeader text="Need a copy?" />
        <FloatingDockResume />
        <div id="resume" className="mt-48 mb-4">
          <TypewriterEffectSmooth
            cursorClassName="hidden"
            className="w-full text-center justify-center items-center"
            words={[
              {
                text: "Thanks for visiting!",
                className:
                  "font-bold text-center w-full mb-2 text-2xl md:text-5xl text-primary",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
