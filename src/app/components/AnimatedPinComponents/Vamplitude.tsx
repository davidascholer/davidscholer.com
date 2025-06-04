"use client";
import { PinContainer } from "@/components/ui/AnimatedPin";
import Image from "next/image";
import React from "react";

export default function VamplitudeComponent() {
  return (
    <div className="w-[200px] flex items-center justify-center ">
      <PinContainer title="Vamplitude" href="https://vamplitude.com/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Vamplitude
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              I like to call Vamplitude my &quot;front end fun house&quot;. I
              wrote it in college using vanilla Javascript, HTML, and CSS. I
              haven&apos;t touched it since and it still works great as it has
              zero dependencies. I still use it to showcase my variety of
              foundational skills including my front end skill set, core
              programming skills, graphic design, complex animations, 3d
              rendering, responsive design, interactive display, and a few other
              things. As stated, it&apos;s kind of a fun house.
            </span>
            <ul>
              <br />
              <li>
                <pre className="text-slate-500">&nbsp;- Vanilla JS</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- HTML</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- CSS/SASS</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Graphic Design</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Animations</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Responsive</pre>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 justify-center p-4">
            <Image
              src="/vamplitude_text.png"
              alt="Vamplitude Icon"
              unoptimized={true} 
              className="rounded-lg object-cover"
              width={120}
              height={120}
              priority
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
