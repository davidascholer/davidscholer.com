"use client";
import { PinContainer } from "@/components/ui/AnimatedPin";
import Image from "next/image";
import React from "react";

export default function NimbioComponent() {
  return (
    <div className="w-[200px] flex items-center justify-center ">
      <PinContainer
        title="Nimbio"
        href="https://nimbio.com/nimbio-for-gates/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            The Nimbio App
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              I am not the core creator of the Nimbio app but I have refactored roughly
              80% of the front-end code base throughout my time at Nimbio and created the new
              UI, working alongside our graphic designer and QA team. Both the
              mobile app and web app use websockets for a persistent connection.
              I also fully implemented native modules into the mobile releases
              allowing React Native to interact with the device hardware,
              bridging the gap between writing the code in React Native versus their native
              Swift/ObjC (iOS) and Kotlin/Java (Android).
            </span>
            <ul>
              <br />

              <li>
                <pre className="text-slate-500">
                  &nbsp;- Live data updates (wss)
                </pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Swift</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Kotlin</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Typescript</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Graphic Design</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- UI</pre>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 justify-center p-4">
            <Image
              src="/nimbio.webp"
              alt="Nimbio Icon"
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
