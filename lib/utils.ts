import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { FileTemplate } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMimeType(fileName: string): string {
  const extension = fileName.split('.').pop()?.toLowerCase()
  const mimeMap: Record<string, string> = {
    js: 'application/javascript',
    ts: 'application/typescript',
    json: 'application/json',
    html: 'text/html',
    css: 'text/css',
    md: 'text/markdown',
    yaml: 'application/x-yaml',
    yml: 'application/x-yaml',
    py: 'text/x-python',
    java: 'text/x-java-source',
    sql: 'application/sql',
    xml: 'application/xml',
    txt: 'text/plain',
  }

  return mimeMap[extension || 'txt'] || 'text/plain'
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
