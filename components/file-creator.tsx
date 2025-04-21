"use client"

import type React from "react"

import { useState } from "react"
import type { FileTemplate } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TemplateSelector } from "@/components/template-selector"
import { CodeEditor } from "@/components/code-editor"
import { detectLanguage } from "@/lib/utils"

interface FileCreatorProps {
  file: FileTemplate
  updateFile: (file: FileTemplate) => void
  templates: FileTemplate[]
  onAddTemplate: (template: FileTemplate) => void
}

export function FileCreator({ file, updateFile, templates, onAddTemplate }: FileCreatorProps) {
  const [activeTab, setActiveTab] = useState<string>("editor")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    const language = detectLanguage(newName)
    updateFile({ ...file, name: newName, language })
  }

  const handleContentChange = (content: string) => {
    updateFile({ ...file, content })
  }

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="filename">File Name</Label>
        <Input
          id="filename"
          value={file.name}
          onChange={handleNameChange}
          placeholder="Enter file name (e.g. .gitignore, package.json)"
          className="font-mono"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        <TabsContent value="editor" className="mt-4">
          <div className="space-y-2">
            <Label htmlFor="content">File Content</Label>
            <div className="border rounded-md overflow-hidden">
              <CodeEditor value={file.content} onChange={handleContentChange} language={file.language} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="templates" className="mt-4">
          <TemplateSelector templates={templates} onSelectTemplate={onAddTemplate} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
