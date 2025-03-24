import type {TLotComponent} from "./types";
import {FC, useEffect, useRef, useState} from "react"
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import SvgIcon from "@/shared/ui/SvgIcon";
import getRandomFloat from "@/shared/utils/getRandomFloat";
import getRandomInt from "@/shared/utils/getRandomInt";
import "./Lot.pcss"
import getFormatTime from "@/shared/ui/Lot/utils/getFormatTime";

const Lot: FC<TLotComponent> = (props) => {
  const {
    lot,
    className,
  } = props

  const [time, setTime] = useState(getRandomInt(3600,12000))
  const price = useRef(getRandomFloat(0.4,5))
  const currentBid = getFormatTime(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((state => state - 1))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className={classNames(className, "lot")}>
      <div className="lot__preview">
        <div className="lot__time label label--main-2 label--popins label--more-small">
          {currentBid}
        </div>
        <img
          className="lot__image"
          src={lot.image} alt=""
          width="252" height="252" loading="lazy"
        />
      </div>
      <div className="lot__info">
        <h3 className="lot__title title title--small">Sun-Glass</h3>
        <div className="lot__footer">
          <div className="lot__price">
            <div className="lot__price-label text text--popins text--small text--main-blue-light">Current bid</div>
            <div className="lot__price-number label label--popins label--more-small">
              <SvgIcon className="lot__price-icon" name="ethereum"/>
              {price.current}
            </div>
          </div>
          <Button className="lot__button is-bold">
            place bid
          </Button>
        </div>
      </div>
    </article>
  )
}

export default Lot