"use client"

import { TracingBeam } from "@/components/ui/TracingBeam"

interface TracingBeamComponentProps {
  children: React.ReactNode;
}

export default function TracingBeamComponent({ children }: TracingBeamComponentProps) {
  return (
    <TracingBeam>
      <div className="mx-auto antialiased relative">
       {children}
      </div>
    </TracingBeam>
  )
}
