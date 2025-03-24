import type {TLogo} from "./types"
import type {FC} from "react"
import {Link} from "react-router"
import classNames from "classnames"
import SvgIcon from "@/shared/ui/SvgIcon";
import "./Logo.pcss"

const Logo: FC<TLogo> = (props) => {
  const {
    className,
    type = "base",
  } = props;

  const typesLogo = {
    "base": "logo",
    "isWhite": "logo-white"
  }

  const typesClass = {
    "base": "",
    "isWhite": "is-white"
  }

  return (
    <Link className={classNames(className, "logo", typesClass[type])} to="/" aria-label="go to home page">
      <span className="logo__inner" title="to home page">
        <SvgIcon className="logo__icon"  name={typesLogo[type]}/>
        <span className="logo__text title title--small">DiveSea</span>
      </span>
    </Link>
)
}

export default Logo