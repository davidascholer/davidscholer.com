"use client";
import { PinContainer } from "@/components/ui/AnimatedPin";
import Image from "next/image";
import React from "react";

export default function DillFreshPinComponent() {
  return (
    <div className="flex items-center justify-center">
      <PinContainer title="Dill Fresh" href="https://app.dillfresh.com">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Dill Fresh
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Dill Fresh is my latest project. This is an app designed for
              mobile devices, built for a client where I served as the project
              manager as well as handling the CI/CD pipeline and deployment. It
              is currently in beta and is seeking funding but is live for demo.
            </span>
            <ul>
              <br />
              <li>
                <pre className="text-slate-500">
                  &nbsp;- React 19 and React Native front end
                </pre>
              </li>
              <li>
                <pre className="text-slate-500">
                  &nbsp;- Python/Django and PostgresQL back end
                </pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Google APIs</pre>
              </li>
              <li>
                <pre className="text-slate-500">
                  &nbsp;- Testing: Unit, End-to-end, Regression
                </pre>
              </li>
              <li>
                <pre className="text-slate-500">
                  &nbsp;- Persistent data updates (http)
                </pre>
              </li>
              <li>
                <pre className="text-slate-500">
                  &nbsp;- Transaction history
                </pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Analytics</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- Notifications</pre>
              </li>
              <li>
                <pre className="text-slate-500">&nbsp;- SMTP</pre>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 justify-center p-4">
            <Image
              src="/dillfresh.svg"
              alt="Dill Fresh App Screenshot"
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
