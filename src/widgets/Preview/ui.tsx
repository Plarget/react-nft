import type {FC} from "react"
import Button from "@/shared/ui/Button";
import imageAnimation from "@/shared/assets/images/content/preview.jpg"
import imageAnimation2 from "@/shared/assets/images/content/preview2.jpg"
import imageArrow from "@/shared/assets/images/content/arrow.png"
import imagePoints from "@/shared/assets/images/content/points.png"
import "./Preview.pcss"

const Preview: FC = () => {

  return (
    <section className="preview">
      <div className="preview__inner container">
        <div className="preview__body">
          <div className="preview__header visible-mobile">
            <span className="preview__label title title--very-small title--main-3-little-light">
              over 1M CREATORS
            </span>
          </div>
          <h1 className="preview__title title title--very-big">Discover And Create NFTs</h1>
          <div className="preview__text text">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <b
            className="text text--main text--bold"> $20
            bonus</b>.
          </div>
          <div className="preview__actions">
            <Button className="preview__button">Explore More</Button>
            <Button className="preview__button is-transparent is-small">create NFT</Button>
          </div>
          <dl className="preview__statistic hidden-mobile">
            <div className="preview__statistic-detail">
              <dd className="preview__statistic-number title title--litle-big title--puiblic-sans">430K+</dd>
              <dt className="preview__statistic-label label label--very-small label--main-3-little-light">Art Works</dt>
            </div>
            <div className="preview__statistic-detail">
              <dd className="preview__statistic-number title title--litle-big title--puiblic-sans">159K+</dd>
              <dt className="preview__statistic-label label label--very-small label--main-3-little-light">Creators</dt>
            </div>
            <div className="preview__statistic-detail">
              <dd className="preview__statistic-number title title--litle-big title--puiblic-sans">87K+</dd>
              <dt className="preview__statistic-label label label--very-small label--main-3-little-light">Collections
              </dt>
            </div>
          </dl>
        </div>
        <div className="preview__animation">
          <div className="preview__animation-container">
            <img
              className="preview__animation-image is-main is-first"
              src={imageAnimation} alt="obstact figure"
              width="391" height="394" loading="lazy"
            />
            <img
              className="preview__animation-image is-main is-first is-blur"
              src={imageAnimation} alt="obstact figure"
              width="391" height="394" loading="lazy"
            />
          </div>
          <div className="preview__animation-container">
            <img
              className="preview__animation-image is-main is-second "
              src={imageAnimation2} alt="obstact figure"
              width="319" height="322" loading="lazy"
            />
            <img
              className="preview__animation-image is-main is-second is-blur"
              src={imageAnimation2} alt="obstact figure"
              width="319" height="322" loading="lazy"
            />
          </div>
          <img
            className="preview__animation-image is-arrow"
            src={imageArrow} alt="arrow"
            width="99" height="83" loading="lazy"
          />
          <img
            className="preview__animation-image is-points"
            src={imagePoints} alt="points"
            width="123" height="284" loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Preview