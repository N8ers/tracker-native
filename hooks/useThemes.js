import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

import { darkmode, lightmode } from "../Styles"

export function useThemes() {
  const isDarkmode = useSelector((state) => state.user.darkmode)

  const [themes, setTheme] = useState(darkmode)

  useEffect(() => {
    if (isDarkmode) {
      setTheme(darkmode)
    } else {
      setTheme(lightmode)
    }
  }, [isDarkmode])

  return themes
}
