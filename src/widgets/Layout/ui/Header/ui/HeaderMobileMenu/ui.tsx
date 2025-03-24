import type {THeaderMobileMenu} from "./types.ts";
import {FC, useEffect} from "react"
import {Link} from "react-router";
import useBodyLock from "@/shared/hooks/useBodyLock";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import "./HeaderMobileMenu.pcss"

const HeaderMobileMenu: FC<THeaderMobileMenu> = (props) => {
  const {
    className,
    isMenuOpened,
  } = props

  const bodyLock = useBodyLock()


  useEffect(() => {
    bodyLock(isMenuOpened)
    return () => {
      bodyLock(false)
    }
  }, [isMenuOpened])


  return (
    <div className={classNames(className, "header-mobile-menu")}>
      <ul className="header-mobile-menu__navigation">
        <li className="header-mobile-menu__navigation-item">
          <Link className="header-mobile-menu__navigation-link link link--mobile" to="/">Discover</Link>
        </li>
        <li className="header-mobile-menu__navigation-item">
          <Link className="header-mobile-menu__navigation-link link link--mobile" to="/">creators</Link>
        </li>
        <li className="header-mobile-menu__navigation-item">
          <Link className="header-mobile-menu__navigation-link link link--mobile" to="/">Sell</Link>
        </li>
        <li className="header-mobile-menu__navigation-item">
          <Link className="header-mobile-menu__navigation-link link link--mobile" to="/">stats</Link>
        </li>
      </ul>
      <address className="header-mobile-menu__contacts">
        <ul className="header-mobile-menu__contacts-list">
          <li className="header-mobile-menu__contacts-item">
            <Link
              className="header-mobile-menu__contacts-link"
              aria-label="go to instagram"
              to={`/`}
            >
            <span className="header-mobile-menu__contacts-icon" title="to instagram">
              <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd" clipRule="evenodd"
                  d="M8.21253 0.370117C9.22205 0.406175 10.2676 0.406175 11.2772 0.442227C12.1785 0.47828 13.0078 0.622498 13.801 1.0912C14.8105 1.70412 15.4234 2.60548 15.6397 3.75921C15.7479 4.44424 15.7839 5.16532 15.82 5.85036C15.8561 7.36463 15.82 8.87891 15.82 10.3932C15.82 11.1864 15.7839 11.9796 15.5316 12.7367C15.0268 14.2149 13.9812 15.1163 12.4669 15.4047C11.7819 15.5489 11.0608 15.5489 10.3758 15.585C8.8615 15.621 7.38328 15.585 5.86899 15.585C5.07579 15.585 4.2826 15.5489 3.52546 15.2966C2.04722 14.7918 1.14586 13.7462 0.857428 12.2319C0.713213 11.5469 0.713213 10.8258 0.677158 10.1408C0.641101 8.62653 0.677158 7.11225 0.677158 5.59798C0.677158 4.80479 0.713213 4.01159 0.965593 3.25445C1.47036 1.77623 2.51593 0.874879 4.03021 0.586445C4.71525 0.442232 5.43634 0.442232 6.12137 0.406175C6.80641 0.370117 7.49144 0.370117 8.21253 0.370117ZM14.4512 7.83349C14.4152 7.83349 14.4512 7.83349 14.4512 7.83349C14.4152 7.22052 14.4152 6.64361 14.4152 6.03065C14.4152 5.45375 14.3791 4.87684 14.307 4.29994C14.1628 3.0019 13.4056 2.13654 12.1436 1.88415C11.4946 1.73992 10.7734 1.73992 10.1244 1.73992C8.82636 1.70387 7.56438 1.70387 6.26633 1.73992C5.61731 1.73992 4.96829 1.77597 4.35532 1.88415C3.27362 2.06443 2.51643 2.67739 2.19192 3.75909C2.08375 4.11965 2.04769 4.48022 2.01163 4.84079C1.97558 6.21094 1.97558 7.58109 1.97558 8.95124C1.97558 9.81659 2.01163 10.718 2.08375 11.5834C2.19192 12.8814 2.98517 13.7828 4.28321 13.9992C4.93223 14.1073 5.61731 14.1434 6.30239 14.1434C7.56438 14.1794 8.82636 14.1434 10.1244 14.1434C10.7013 14.1434 11.2782 14.1073 11.8551 14.0352C12.396 13.9992 12.9008 13.8189 13.3335 13.4583C14.0546 12.8814 14.307 12.1242 14.3431 11.2589C14.4152 10.1772 14.4152 9.02335 14.4512 7.83349Z"
                  fill="#535353"
                />
                <path
                  fillRule="evenodd" clipRule="evenodd"
                  d="M12.1135 7.97418C12.1135 10.1392 10.3815 11.8712 8.21642 11.8712C6.05137 11.8712 4.31934 10.1392 4.31934 7.9381C4.31934 5.80916 6.08745 4.07715 8.25249 4.07715C10.3815 4.07715 12.1135 5.80916 12.1135 7.97418ZM8.21761 10.5009C9.58906 10.5009 10.744 9.346 10.744 7.97457C10.744 6.60313 9.58906 5.44823 8.21761 5.44823C6.81006 5.44823 5.69124 6.60313 5.69124 7.97457C5.65515 9.346 6.81006 10.5009 8.21761 10.5009Z"
                  fill="#535353"
                />
                <path
                  d="M13.1587 3.90128C13.1587 4.40668 12.7616 4.83988 12.2562 4.83988C11.7508 4.83988 11.3176 4.40668 11.3537 3.90128C11.3537 3.39588 11.7508 2.99878 12.2562 2.99878C12.7616 2.99878 13.1587 3.39588 13.1587 3.90128Z"
                  fill="#535353"
                />
              </svg>
            </span>
            </Link>
          </li>
          <li className="header-mobile-menu__contacts-item">
            <Link
              className="header-mobile-menu__contacts-link"
              aria-label="go to youtube"
              to={`/`}
            >
                    <span className="header-mobile-menu__contacts-icon" title="to linkedin">
                      <svg width="21" height="20" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd" clipRule="evenodd"
                        d="M15.2817 9.2445V14.8485H12.0092V9.61265C12.0092 8.30368 11.5593 7.40377 10.373 7.40377C9.47309 7.40377 8.94132 8.01735 8.69588 8.59002C8.61407 8.79454 8.57317 9.08088 8.57317 9.36722V14.8485H5.30074C5.30074 14.8485 5.34165 5.97209 5.30074 5.07218H8.57317V6.46296C8.57317 6.46296 8.57317 6.50385 8.53226 6.50385H8.57317V6.46296C9.02313 5.80847 9.75943 4.82675 11.5184 4.82675C13.6454 4.82675 15.2817 6.25843 15.2817 9.2445ZM1.94967 0.369751C0.844321 0.369751 0.107422 1.10665 0.107422 2.04824C0.107422 2.98982 0.803384 3.72673 1.90873 3.72673H1.94967C3.09596 3.72673 3.79192 2.98983 3.79192 2.04824C3.75098 1.10665 3.05502 0.369751 1.94967 0.369751ZM0.271483 14.8472H3.50301V5.07089H0.271483V14.8472Z"
                        fill="#535353"
                      />
                      </svg>
                    </span>
            </Link>
          </li>
          <li className="header-mobile-menu__contacts-item">
            <Link
              className="header-mobile-menu__contacts-link"
              aria-label="go to facebook"
              to={`/`}
            >
                    <span className="header-mobile-menu__contacts-icon" title="to facebook">
                      <svg width="9" height="21" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd" clipRule="evenodd"
                        d="M7.31215 7.95719H5.19214V15.5446H2.0307V9.19856V7.95719H0.542969V5.27927H2.0307V3.53119C2.0307 2.30381 2.6258 0.369751 5.19214 0.369751H7.53531V2.97328H5.86162C5.60126 2.97328 5.19214 3.12206 5.19214 3.71715V5.27927H7.57251L7.31215 7.95719Z"
                        fill="#535353"
                      />
                      </svg>
                    </span>
            </Link>
          </li>
          <li className="header-mobile-menu__contacts-item">
            <Link
              className="header-mobile-menu__contacts-link"
              aria-label="go to twitter"
              to={`/`}
            >
                    <span className="header-mobile-menu__contacts-icon" title="to twitter">
                      <svg width="21" height="17" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd" clipRule="evenodd"
                        d="M15.4112 2.08562C14.8399 2.33556 14.2686 2.51409 13.6259 2.5855C14.2686 2.19274 14.7685 1.58575 14.9828 0.871642C14.3758 1.2287 13.6974 1.47863 13.019 1.62145C12.4477 1.01446 11.6264 0.621704 10.7338 0.621704C9.01992 0.621704 7.6274 2.01421 7.6274 3.72807C7.6274 3.97802 7.6631 4.22795 7.69881 4.44219C5.0923 4.29936 2.80714 3.08537 1.27179 1.19299C0.986145 1.65716 0.843323 2.19274 0.843323 2.76403C0.843323 3.83519 1.37891 4.79924 2.23584 5.37052C1.73596 5.37052 1.23609 5.2277 0.807617 4.97776V5.01346C0.807617 6.5131 1.87879 7.79849 3.30702 8.08413C3.05707 8.15554 2.77143 8.19125 2.48578 8.19125C2.27155 8.19125 2.09302 8.15554 1.91449 8.11984C2.30725 9.36952 3.44984 10.2622 4.84235 10.2979C3.77119 11.1191 2.45008 11.619 0.986145 11.619C0.736207 11.619 0.486269 11.619 0.236328 11.5833C1.62885 12.4759 3.2356 12.9758 5.02088 12.9758C10.7695 12.9758 13.8759 8.22695 13.8759 4.12083C13.8759 3.97802 13.8759 3.83519 13.8759 3.72807C14.4829 3.26391 15.0185 2.69261 15.4112 2.08562Z"
                        fill="white"
                      />
                      </svg>

                    </span>
            </Link>
          </li>
        </ul>
      </address>
      <Button className="header-mobile-menu__button">Connect Wallet</Button>
    </div>
  )
}

export default HeaderMobileMenu