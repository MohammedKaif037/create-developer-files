"use client"

import type React from "react"

import type { FileTemplate } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { File, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

interface FileListProps {
  files: FileTemplate[]
  currentFile: FileTemplate | null
  onSelectFile: (file: FileTemplate) => void
  onDeleteFile: (id: string) => void
}

export function FileList({ files, currentFile, onSelectFile, onDeleteFile }: FileListProps) {
  const [fileToDelete, setFileToDelete] = useState<string | null>(null)

  const handleDeleteClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setFileToDelete(id)
  }

  const confirmDelete = () => {
    if (fileToDelete) {
      onDeleteFile(fileToDelete)
      setFileToDelete(null)
    }
  }

  if (files.length === 0) {
    return (
      <div className="border rounded-lg p-6 text-center bg-muted/50">
        <p className="text-muted-foreground">No files created yet</p>
      </div>
    )
  }

  return (
    <>
      <ScrollArea className="h-[300px] border rounded-lg">
        <div className="p-1">
          {files.map((file) => (
            <div
              key={file.id}
              className={cn(
                "flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-muted/50 transition-colors",
                currentFile?.id === file.id && "bg-muted",
              )}
              onClick={() => onSelectFile(file)}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <File className="h-4 w-4 flex-shrink-0" />
                <span className="font-mono text-sm truncate">{file.name || "(Unnamed File)"}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-muted-foreground hover:text-destructive"
                onClick={(e) => handleDeleteClick(file.id, e)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      <AlertDialog open={!!fileToDelete} onOpenChange={(open) => !open && setFileToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete File</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this file? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
