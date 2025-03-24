import type {FC} from "react"
import {Link} from "react-router";
import Logo from "@/shared/ui/Logo";
import FooterContacts from "@/widgets/Layout/ui/Footer/ui/FooterContacts";
import "./Footer.pcss"

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__top">
            <div className="footer__container">
              <Logo className="footer__logo" type="isWhite"/>
              <FooterContacts className="footer__contacts visible-mobile"/>
            </div>
            <ul className="footer__categories footer__categories-list">
              <li className="footer__categories-item">
                <Link className="footer__categories-link label label--small label--main-3-light" to={`/`}>
                  Privacy Policy
                </Link>
              </li>
              <li className="footer__categories-item">
                <Link className="footer__categories-link label label--small label--main-3-light" to={`/`}>
                  Terms & Conditions
                </Link>
              </li>
              <li className="footer__categories-item">
                <Link className="footer__categories-link label label--small label--main-3-light" to={`/`}>
                  About Us
                </Link>
              </li>
              <li className="footer__categories-item">
                <Link className="footer__categories-link label label--small label--main-3-light" to={`/`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="footer__line"/>
          <div className="footer__bottom">
            <small className="footer__copy label label--small label--main-3-light">
              © 2023 EATLY All Rights Reserved.
            </small>
            <FooterContacts className="footer__contacts hidden-mobile"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer