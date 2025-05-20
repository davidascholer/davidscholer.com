import FileUploadComponent from "./components/FileUploadComponent";
import ScrollAnimationComponent from "./components/ScrollAnimationComponent"; // import CardHoverEffectComponent from "./components/CardHoverEffectComponent";
import CodeBlockComponent from "./components/CodeBlockComponent";
import LinkPreviewComponent from "./components/LinkPreviewComponent";
import MovingBorderComponent from "./components/MovingBorderComponent"; // import NavbarMenuComponent from "./components/NavbarMenuComponent";
import ParallaxScrollComponent from "./components/ParallaxScrollComponent"; // import InputTextComponent from "./components/InputTextComponent";// import ResizeableNavbarComponent from "./components/ResizeableNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import FormComponent from "./components/FormComponent";
import StickyBannerComponent from "./components/StickyBannerComponent";
import StickyScrollRevealComponent from "./components/StickyScrollRevealComponent";
import TimelineComponent from "./components/TimelineComponent";
import TracingBeamComponent from "./components/TracingBeamComponent";
import TypewriterEffectComponent from "./components/TypeWriteEffectComponent";
import WorldMapComponent from "./components/WorldMapComponent";
import AppleCardsCarouselComponent from "./components/CardCarouselComponent";
import BackgroundGradientComponent from "./components/BackgroundGradientComponent";
import AnimatedModalComponent from "./components/AnimatedModalComponent";
import MacbookScrollComponent from "./components/MacbookScrollComponent";
import AnimatedTestimonialsComponent from "./components/TestimonialsComponent";
import CardHoverEffectComponent from "./components/CardHoverEffectComponent";
import InputTextComponent from "./components/InputTextComponent";
// import NavbarMenuComponent from "./components/NavbarMenuComponent";
import ExpandableCardComponent from "./components/ExpandableCardComponent";
import ResizeableNavbarComponent from "./components/ResizeableNavbarComponent";
import FloatingDockComponent from "./components/FloatingDockComponent";
import FloatingNavComponent from "./components/FloatingNavbarComponent";
import FocusCardsComponent from "./components/FocusCardsComponent";
import FollowingPointerComponent from "./components/FollowingPointerComponent";
import GlobeAnimationComponent from "./components/GlobeAnimationComponent";
import HeroParallaxComponent from "./components/HeroParallaxComponent";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <StickyBannerComponent />
      <main>
        <div className="flex flex-col items-center min-h-screen gap-8 p-4">
          <ResizeableNavbarComponent>
            {/* <NavbarMenuComponent /> */}
            <FloatingNavComponent />
            <FocusCardsComponent />
            <FollowingPointerComponent />
            <FloatingDockComponent />
            <HeroParallaxComponent />
              <GlobeAnimationComponent />
            <FileUploadComponent />
            <MovingBorderComponent />
            <LinkPreviewComponent />
            <CardHoverEffectComponent />
            <InputTextComponent />
            <SidebarComponent />
            <FormComponent />
            <StickyScrollRevealComponent />
            <TimelineComponent />
            <AppleCardsCarouselComponent />
            <ScrollAnimationComponent />
            <ExpandableCardComponent />
            <TypewriterEffectComponent />
            <WorldMapComponent />
            <BackgroundGradientComponent />
            <AnimatedModalComponent />
            <AnimatedTestimonialsComponent />
            <MacbookScrollComponent />
            <ParallaxScrollComponent />
            <CodeBlockComponent />
            <TracingBeamComponent>
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
              <Lorem />
            </TracingBeamComponent>
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
          </ResizeableNavbarComponent>
        </div>
      </main>
    </div>
  );
}

const Lorem = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );
};
