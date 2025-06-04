"use client";
import { PinContainer } from "@/components/ui/AnimatedPin";
import Image from "next/image";
import React from "react";

export default function TheMetPinComponent() {
  return (
    <div className="w-[200px] flex items-center justify-center bg-green-200">
      <PinContainer title="The Met Collection" href="https://themet.apiufo.com">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            The Met Collection
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              An example of one of my many API focused applications but more UI
              heavy. This one has more search features, more complex api
              endpoints, advanced pagination, menu options, filter options, and
              custom styling. The API used here is from the Metropolitan Museum
              of Art in New York City, one of my favorite museums.
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
                <pre className="text-slate-500">&nbsp;- CRUD (Postgresql)</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Versioning</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Source control</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Dev ops</pre>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 justify-center p-4">
            <Image
              src="/themet_icon_128.png"
              unoptimized={true} 
              alt="The Met Collection Icon"
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
