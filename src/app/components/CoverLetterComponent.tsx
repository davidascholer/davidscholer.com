import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

export default function CoverLetterComponent() {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xs sm:text-base font-bold cursor-pointer text-center justify-center w-full">
            View My Cover Letter
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-2 sm:p-8 font-light text-center font-mono text-xs min-[400px]:text-sm min-[500px]:text-lg text-shadow-sm">
              <p>
                Hello! I am David, a multi-device, full-stack, senior front-end
                software engineer. I have experience programming all kinds of
                devices: micro-controllers, POS systems, phones, smart watches,
                car apps, desktop apps, UPS scanners, and others. I also have
                extensive experience building web applications, web sites, and
                mobile apps.
              </p>
              <br />
              <p>
                I started my path by originally studying Electrical Engineering
                in college. My studies and being on the robotics club helped
                give me a foundation of understanding how the technologies that
                we use work from the physical layer to the application layer.
                While attending college, I wrote a number of UIs and animation
                intensive websites using core vanilla web technologies. Along
                with my studies of Networking, working with Linux, and some
                experience in graphic design, I have solidified my understanding
                of how front-end technologies work on a lower level, though
                I&apos;m always still learning something new.
              </p>
              <br />
              <p>
                While I am confident in my ability to pick up other frameworks,
                I predominantly use React for client applications as I know it
                in and out. I am up to date with React 19 and can update any
                v16, v17, or v18 projects to v19 with ease. On the back end,
                though not quite as savvy, I am still more than capable of
                deploying production servers using NodeJS, Django, or other
                various Python frameworks. Though my past experience has led me
                along a mostly client-side path, when it comes to managing
                databases, handling requests, authentication, basic security,
                and building APIs, I&apos;m solid. I also have experience with
                full-stack release pipelines (CI/CD), project management, and
                CDNs so I could be of some help there as well.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
