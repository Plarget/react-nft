import type { Dispatch, SetStateAction } from "react"

export type TUseToggle = (defaultState: boolean) => {
  value: boolean
  toggleState: () => void
  setValue: Dispatch<SetStateAction<boolean>>
}