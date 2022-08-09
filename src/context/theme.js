import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const Theme = ({children})=>{
  let localData = window.localStorage.getItem('theme')
  const [theme, setTheme] = useState(localData || 'light');
  let data = {
    theme,
    setTheme,
  }
  useEffect(()=>{
    window.localStorage.setItem('theme', theme)
  },[theme])
  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}