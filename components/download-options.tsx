"use client"

import { useState } from "react"
import type { FileTemplate } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Download, FileArchive } from "lucide-react"
import JSZip from "jszip"
import { saveAs } from "file-saver"
import { getMimeType } from "@/lib/utils"

interface DownloadOptionsProps {
  files: FileTemplate[]
}
export function DownloadOptions({ files }: DownloadOptionsProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadSingleFile = (file: FileTemplate) => {
    const mimeType = getMimeType(file.name)
    const blob = new Blob([file.content], { type: `${mimeType};charset=utf-8` })
    saveAs(blob, file.name)
  }

  const downloadAllAsZip = async () => {
    if (files.length === 0) return
    setIsDownloading(true)
    const zip = new JSZip()
    files.forEach((file) => file.name && zip.file(file.name, file.content))
    const content = await zip.generateAsync({ type: "blob" })
    saveAs(content, "devstarter-files.zip")
    setIsDownloading(false)
  }

  const hasNamedFiles = files.some((file) => file.name)

  // FIX: make sure this return is INSIDE the function

 
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Download</h3>

      {files.length > 0 ? (
        <div className="space-y-3">
          <Button
            onClick={downloadAllAsZip}
            disabled={!hasNamedFiles || isDownloading}
            className="w-full"
            variant="default"
          >
            <FileArchive className="mr-2 h-4 w-4" />
            Download as ZIP
          </Button>

          {files.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Individual Files</h4>
              <div className="max-h-[200px] overflow-y-auto space-y-2">
                {files.map((file) => (
                  <Button
                    key={file.id}
                    onClick={() => downloadSingleFile(file)}
                    disabled={!file.name}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start font-mono text-xs"
                  >
                    <Download className="mr-2 h-3 w-3" />
                    {file.name || "(Unnamed File)"}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Create files to enable download options</p>
      )}
    </div>
  )
}
