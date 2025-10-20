"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface AccessibilityContextType {
  fontSize: number
  increaseFontSize: () => void
  decreaseFontSize: () => void
  resetFontSize: () => void
  highContrast: boolean
  toggleHighContrast: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSize")
    const savedHighContrast = localStorage.getItem("highContrast")

    if (savedFontSize) setFontSize(Number(savedFontSize))
    if (savedHighContrast) setHighContrast(savedHighContrast === "true")
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    localStorage.setItem("fontSize", fontSize.toString())
  }, [fontSize])

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
    localStorage.setItem("highContrast", highContrast.toString())
  }, [highContrast])

  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 10, 150))
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 10, 80))
  const resetFontSize = () => setFontSize(100)
  const toggleHighContrast = () => setHighContrast((prev) => !prev)

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        highContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) throw new Error("useAccessibility must be used within AccessibilityProvider")
  return context
}
