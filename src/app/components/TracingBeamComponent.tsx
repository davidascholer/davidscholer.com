"use client"

import { TracingBeam } from "@/components/ui/TracingBeam"

interface TracingBeamComponentProps {
  children: React.ReactNode;
}

export default function TracingBeamComponent({ children }: TracingBeamComponentProps) {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
       {children}
      </div>
    </TracingBeam>
  )
}
