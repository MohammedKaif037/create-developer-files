"use client"

import { useState } from "react"
import { FileCreator } from "@/components/file-creator"
import { FileList } from "@/components/file-list"
import { DownloadOptions } from "@/components/download-options"
import type { FileTemplate } from "@/lib/types"
import { templates } from "@/lib/templates"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function Home() {
  const [files, setFiles] = useState<FileTemplate[]>([])
  const [currentFile, setCurrentFile] = useState<FileTemplate | null>(null)

  const addNewFile = () => {
    const newFile: FileTemplate = {
      id: Date.now().toString(),
      name: "",
      content: "",
      language: "plaintext",
    }
    setFiles([...files, newFile])
    setCurrentFile(newFile)
  }

  const updateFile = (updatedFile: FileTemplate) => {
    setFiles(files.map((file) => (file.id === updatedFile.id ? updatedFile : file)))
    setCurrentFile(updatedFile)
  }

  const deleteFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id))
    if (currentFile?.id === id) {
      setCurrentFile(files.length > 1 ? files[0] : null)
    }
  }

  const addTemplateFile = (template: FileTemplate) => {
    const newFile = {
      ...template,
      id: Date.now().toString(),
    }
    setFiles([...files, newFile])
    setCurrentFile(newFile)
  }

  return (
    <main className="container mx-auto p-4 max-w-6xl">
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-3xl font-bold mt-8 mb-2">DevStarter</h1>
        <p className="text-muted-foreground mb-6">Create and download developer files easily on any device</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Files</h2>
            <Button onClick={addNewFile} variant="outline" size="sm" className="flex items-center gap-1">
              <PlusCircle className="h-4 w-4" />
              <span>New File</span>
            </Button>
          </div>

          <FileList files={files} currentFile={currentFile} onSelectFile={setCurrentFile} onDeleteFile={deleteFile} />

          <div className="mt-6">
            <DownloadOptions files={files} />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {currentFile ? (
            <FileCreator
              file={currentFile}
              updateFile={updateFile}
              templates={templates}
              onAddTemplate={addTemplateFile}
            />
          ) : (
            <div className="border rounded-lg p-8 text-center bg-muted/50">
              <h3 className="text-lg font-medium mb-2">No File Selected</h3>
              <p className="text-muted-foreground mb-4">Create a new file or select a template to get started</p>
              <Button onClick={addNewFile}>Create New File</Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
