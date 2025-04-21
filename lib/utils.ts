import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { FileTemplate } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function detectLanguage(filename: string): string {
  if (!filename) return "plaintext"

  const extension = filename.split(".").pop()?.toLowerCase()

  switch (extension) {
    case "js":
      return "javascript"
    case "jsx":
      return "jsx"
    case "ts":
      return "typescript"
    case "tsx":
      return "tsx"
    case "json":
      return "json"
    case "md":
      return "markdown"
    case "css":
      return "css"
    case "scss":
      return "css"
    case "yml":
    case "yaml":
      return "yaml"
    case "sh":
    case "bash":
      return "bash"
    case "py":
      return "python"
    case "java":
      return "java"
    case "sql":
      return "sql"
    case "xml":
      return "xml"
    default:
      return "plaintext"
  }
}

export function categorizeTemplates(templates: FileTemplate[]) {
  const categories: Record<string, FileTemplate[]> = {}

  templates.forEach((template) => {
    const category = template.category || "Other"
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(template)
  })

  return categories
}
