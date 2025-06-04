import { MacbookScroll } from "@/components/ui/MacbookScroll";

export default function MacbookScrollComponent() {
  return (

    <div className="overflow-hidden max-[350px]:my-[-400px] max-[450px]:my-[-200px] my-10">
      <MacbookScroll
        title={
          <span className="text-4xl font-semibold text-black dark:text-white mb-2 text-center p-2">
            Running automation tests before branch merges helps protect against
            regression issues in production.
          </span>
        }
        src={`/macbookscreen.webp`}
        showGradient={false}
      />
    </div>
  );
}
