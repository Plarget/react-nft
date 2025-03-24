import type { TUseToggle } from "./types"
import { useState } from "react"

const useToggle: TUseToggle = (defaultState) => {
  const [value, setValue] = useState(defaultState)

  const toggleState = () => setValue(a => !a)

  return { value, toggleState, setValue }
}

export default useToggle