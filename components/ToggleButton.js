import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Switch } from '@headlessui/react'

export default function ToggleButton( {props}) {
  const [enabled, setEnabled] = useState(false)
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
      setTheme(theme === "light" ? "dark" : "light");

  }, [enabled])


  return (
    <div className="py-0">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-green' : 'bg-forestGreen'}
          relative inline-flex flex-shrink-0 h-[28px] w-[64px] border-2 border-transparent rounded-full 
          cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  
          focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] rounded-full 
            bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}
