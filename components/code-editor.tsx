"use client"

import { useEffect, useState } from "react"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-json"
import "prismjs/components/prism-css"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-yaml"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-xml-doc"
import "prismjs/themes/prism.css"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
}

export function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-[300px] bg-muted/20 animate-pulse rounded-md"></div>
  }

  const getLanguage = () => {
    switch (language) {
      case "javascript":
        return languages.javascript
      case "typescript":
        return languages.typescript
      case "jsx":
        return languages.jsx
      case "tsx":
        return languages.tsx
      case "json":
        return languages.json
      case "css":
        return languages.css
      case "markdown":
        return languages.markdown
      case "yaml":
        return languages.yaml
      case "bash":
        return languages.bash
      case "python":
        return languages.python
      case "java":
        return languages.java
      case "sql":
        return languages.sql
      case "xml":
        return languages.xml
      default:
        return languages.javascript
    }
  }

  return (
    <div className="w-full min-h-[300px] font-mono text-sm">
      <Editor
        value={value}
        onValueChange={onChange}
        highlight={(code) => highlight(code, getLanguage(), language)}
        padding={16}
        style={{
          fontFamily: "monospace",
          minHeight: "300px",
        }}
        className="w-full"
      />
    </div>
  )
}
