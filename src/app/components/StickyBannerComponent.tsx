import { StickyBanner } from "@/components/ui/StickyBanner";

export default function StickyBannerComponent() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-gray-900 to-gray-700">
        <p className="font-mono text-light mx-0 max-w-[90%] text-white drop-shadow-md">
          Thanks for visiting!
        </p>
      </StickyBanner>
    </div>
  );
}
