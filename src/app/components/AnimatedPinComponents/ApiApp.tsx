"use client";
import { PinContainer } from "@/components/ui/AnimatedPin";
import Image from "next/image";
import React from "react";

export default function ApiAppComponent() {
  return (
    <div className="w-[200px] flex items-center justify-center bg-green-200">
      <PinContainer
        title="Pokemon API"
        href="https://pokemon.apiufo.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            An API Focused Application
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              A basic, commercial grade web/mobile/server/database application,
              using a random API, built for functionality rather than show to
              better display the technologies and software stack more
              conceptually. I have many like it. The front-ends use caching and
              common layout practices utilizing popular UI frameworks. They
              usually have a Postrgresql integrated back-end. I built an SDK
              (essentially, a series of python and shell scripts) that help me
              write this kind of software, quickly. I can do these types of apps
              in my sleep. Sometimes, I do! This one uses a popular testing API.
            </span>
            <ul>
              <br />

              <li>
                <pre className="text-slate-500">&nbsp;- APIs</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Caching</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Authentication</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Pagination</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Logging</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- CRUD (Postgresql)</pre>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 justify-center p-4">
            <Image
              src="/api.svg"
              alt="Api Icon"
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
