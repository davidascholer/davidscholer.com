"use client";

import { StickyScroll } from "@/components/ui/StickyScrollReveal";

const content = [
  {
    title: "UI/UX Design",
    description:
      "When working with graphic designers, we have primarily used either Figma or hand-mocked images to communicate the designs. I use Adobe Illustrator for my own UI designs. ",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#304f50,#afced0)] text-white">
        UI/UX Design
      </div>
    ),
  },
  {
    title: "System Design",
    description:
      "I am familiar with all facets of the development cycle for creating production ready front-end applications and have used many different architectures for deployment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#afced0,#304f50)] text-white">
        System Design
      </div>
    ),
  },
  {
    title: "Project Management",
    description:
      "My experience consists of the Waterfall system for simple projects, SCRUM for larger projects and teams of 2+ where organization and adding features is key. I've used Slack with previous companies but my tool of choice for my personal and small team projects is Jira. ",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#304f50,#afced0)] text-white">
        Project Management
      </div>
    ),
  },
  {
    title: "Source Control",
    description:
      "I use Git for source control and have experience with GitHub and GitLab. I am comfortable with branching strategies, pull requests, and code reviews.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#afced0,#304f50)] text-white">
        Source Control
      </div>
    ),
  },
  {
    title: "Web Technologies",
    description: "When I was a junior dev, I would write all my code using vanilla JS, CSS, HTML and became well versed with the core languages, technologies, and APIs the web runs on.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#304f50,#afced0)] text-white">
        Web Technologies
      </div>
    ),
  },
  {
    title: "Graphic Design",
    description: "I took a graphic design course in college covering both Photoshop and Illustrator. I still use Illustrator on a weekly basis, mainly for creating custom SVGs and wire framing.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#afced0,#304f50)] text-white">
        Graphic Design
      </div>
    ),
  },
  {
    title: "API Integration",
    description: "I've implemented hundreds of APIs into various projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#304f50,#afced0)] text-white">
        API Integration
      </div>
    ),
  },
  {
    title: "Authentication",
    description: "I typically use my own custom authentication server written in Python using Django with JWT but can replicate in Node or use 3rd party APIs as well, such as Firebase, when necessary.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#afced0,#304f50)] text-white">
        Authentication
      </div>
    ),
  },
  {
    title: "Caching",
    description: "I implement React Query, Tanstack Query, or RTK Query, depending on the architecture, for all data intensive API calls.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#304f50,#afced0)] text-white">
        Caching
      </div>
    ),
  },
  {
    title: "Linting",
    description: "I use ESLint with appropriate plugins for linting.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#afced0,#304f50)] text-white">
        Linting
      </div>
    ),
  },
  {
    title: "State Management",
    description: "Simple context for small apps, Redux for larger apps, and I will occasionally use Zustand when I need something slightly more substantial but where Redux is off the table.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#304f50,#afced0)] text-white">
        State Management
      </div>
    ),
  },
  {
    title: "Component Testing",
    description: "I write Storybook stories for all of my components.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#afced0,#304f50)] text-white">
        Component Testing
      </div>
    ),
  },
  {
    title: "End-to-End Testing",
    description: "I have experience with Selenium using WebDriver but for most front end projects, I will use Playwright.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#304f50,#afced0)] text-white">
        End-to-End Testing
      </div>
    ),
  },
  {
    title: "Unit Testing",
    description: "Jest. When using Storybook, I will use the Storybook test runner's Jest wrapper.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#afced0,#304f50)] text-white">
        Unit Testing
      </div>
    ),
  },
  {
    title: "Automation Testing",
    description: "Outside of end-to-end testing, I use Chromatic when visual automation testing is needed.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#304f50,#afced0)] text-white">
        Automation Testing
      </div>
    ),
  },
  {
    title: "Bundlers",
    description: "While I obviously don't write my own bundlers, I understand what is going on under the hood which is helpful when debugging build issues.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#afced0,#304f50)] text-white">
        Bundlers
      </div>
    ),
  },
  {
    title: "Containerization",
    description: "What else but Docker?",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#304f50,#afced0)] text-white">
        Containerization
      </div>
    ),
  },
  {
    title: "CI/CD",
    description: "Github Actions with rules for passing tests before every push, requiring a pass for main dev and prod branch pushes.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#afced0,#304f50)] text-white">
        CI/CD
      </div>
    ),
  },
  {
    title: "CDNs",
    description: "I have past experience with Google Cloud but now use various AWS services. While I am capable of implementing server distribution and load balancing for content delivery, I prefer using more abstract services such as CloudFront. I also use Heroku when appropriate as I am not a fan of AWS's EBS. ",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#304f50,#afced0)] text-white">
        CDNs
      </div>
    ),
  },
  {
    title: "Native Mobile Development",
    description: "I have created native iOS and Android versions for many web applications. I also have experience creating stand-alone native apps for companies where using built-in hardware is pertinent, UPS being the most recognized. ",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_top_right,#afced0,#304f50)] text-white">
        Native Mobile Development
      </div>
    ),
  },

];
export default function StickyScrollRevealComponent() {
  return (
    <div className="text-sm sm:text-lg w-full py-4 text-primary px-2 sm:p-16">
      <StickyScroll content={content} />
    </div>
  );
}
