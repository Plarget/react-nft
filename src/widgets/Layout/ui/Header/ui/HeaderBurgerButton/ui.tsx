import type {THeaderBurgerButton} from "./types.ts";
import type {FC} from "react"
import classNames from "classnames";
import "./HeaderBurgerButton.pcss"

const HeaderBurgerButton: FC<THeaderBurgerButton> = (props) => {
  const {
    className,
    isMenuOpened,
    toggleMenu
  } = props

  return (
    <button
      className={classNames(className, "header-burger-button", {
        "is-active": isMenuOpened
      })}
      type="button"
      onClick={toggleMenu}
    >
      <div className="header-burger-button__center">
        <div></div>
      </div>
    </button>
  )
}

export default HeaderBurgerButton
