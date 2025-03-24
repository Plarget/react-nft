import {FC, useEffect, useState} from "react"
import Logo from "@/shared/ui/Logo";
import {Link} from "react-router";
import Button from "@/shared/ui/Button";
import HeaderBurgerButton from "./ui/HeaderBurgerButton";
import classNames from "classnames";
import useToggle from "@/shared/hooks/useToggle";
import HeaderMobileMenu from "@/widgets/Layout/ui/Header/ui/HeaderMobileMenu";
import "./Header.pcss"

const Header: FC = () => {
  const [wasScrolled, setWasScrolled] = useState(false)
  const {
    value: isMenuOpened,
    toggleState: toggleIsMenuOpened,
  } = useToggle(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 1) {
        setWasScrolled(true);
      } else {
        setWasScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <header className={classNames("header", {
        "is-scrolled": wasScrolled
      })}>
        <div className="header__inner container">
          <nav className="header__navigation">
            <Logo className="header__navigation-logo is-header"/>
            <ul className="header__navigation-list hidden-mobile">
              <li className="header__navigation-item">
                <Link className="header__navigation-link link" to="/">Discover</Link>
              </li>
              <li className="header__navigation-item">
                <Link className="header__navigation-link link" to="/">creators</Link>
              </li>
              <li className="header__navigation-item">
                <Link className="header__navigation-link link" to="/">Sell</Link>
              </li>
              <li className="header__navigation-item">
                <Link className="header__navigation-link link" to="/">stats</Link>
              </li>
            </ul>
          </nav>
          <Button className="header__button hidden-mobile">Connect Wallet</Button>
          <HeaderBurgerButton className="visible-mobile" isMenuOpened={isMenuOpened} toggleMenu={toggleIsMenuOpened}/>
        </div>
      </header>
      {isMenuOpened && (
        <HeaderMobileMenu className="visible-mobile" isMenuOpened={isMenuOpened}/>
      )}
    </>
  )
}

export default Header