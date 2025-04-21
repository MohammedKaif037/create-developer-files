"use client"

import type { FileTemplate } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { categorizeTemplates } from "@/lib/utils"

interface TemplateSelectorProps {
  templates: FileTemplate[]
  onSelectTemplate: (template: FileTemplate) => void
}

export function TemplateSelector({ templates, onSelectTemplate }: TemplateSelectorProps) {
  const categorizedTemplates = categorizeTemplates(templates)

  return (
    <div className="space-y-4">
      <ScrollArea className="h-[400px] pr-4">
        {Object.entries(categorizedTemplates).map(([category, categoryTemplates]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium mb-3">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categoryTemplates.map((template) => (
                <Card key={template.name} className="overflow-hidden">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-mono">{template.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {template.description || "No description available"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="bg-muted rounded p-2 h-16 overflow-hidden">
                      <pre className="text-xs font-mono opacity-70 overflow-hidden">
                        {template.content.slice(0, 150)}
                        {template.content.length > 150 && "..."}
                      </pre>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 bg-muted/50">
                    <Button variant="ghost" size="sm" className="w-full" onClick={() => onSelectTemplate(template)}>
                      <Plus className="h-4 w-4 mr-1" />
                      Add to Files
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
