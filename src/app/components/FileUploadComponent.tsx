"use client"
import { useState } from "react"
import { FileUpload } from "@/components/ui/FileUpload"

export default function FileUploadComponent() {
  const [files, setFiles] = useState<File[]>([])
  const handleFileUpload = (f: File[]) => {
    setFiles(f)
    console.log(files)
    console.log(f)
  }

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  )
}
