/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false)

  function toggle() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="hidden sm:block">
      {/* por padrão o input é hidden a partir de sm, ou seja, uma tela maior ou igual a 
      640px ele será block, não esquecer que o taiwlnd é mobile first */}
      <MoonIcon
        className={`h-8 text-gray-100 cursor-pointer ${darkMode ? 'hidden' : 'block'}  transform transition-transform duration-300`}
        onClick={toggle}
      />
      <SunIcon
        className={`h-8 text-gray-100 cursor-pointer ${darkMode ? 'block' : 'hidden'}  transform transition-transform duration-300 hover:rotate-180`}
        onClick={toggle}
      />
    </div>
  )
}
