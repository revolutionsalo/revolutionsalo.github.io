"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CopyButtonProps {
  text: string
  label?: string
}

export function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }
  
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center text-xs text-[#379fdc] ml-2 px-1.5 py-0.5 rounded hover:bg-[#379fdc]/10 transition-colors"
      title={`Copy ${label || text} to clipboard`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 mr-1" />
          <span>Kopioitu leikepöydälle</span>
        </>
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  )
} 