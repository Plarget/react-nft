import type {FC} from "react"
import imageExplore from "@/shared/assets/images/content/explore.jpg"
import Button from "@/shared/ui/Button";
import "./ExploreBlock.pcss"

const ExploreBlock: FC = () => {
  return (
    <section className="explore-block">
      <div className="explore-block__inner container">
        <div className="explore-block__body">
          <div className="explore-block__info">
            <h2 className="explore-block__title title title--big title--main-2">Create and Sell NFTs</h2>
            <div className="explore-block__label label label--popins label--main-3-very-light">
              World’s Largest NFT Place
            </div>
            <div className="explore-block__actions">
              <Button className="explore-block__button is-main-2">Explore More</Button>
              <Button className="explore-block__button is-transparent-main-2">Sell Artwork</Button>
            </div>
          </div>
          <div className="explore-block__preview">
            <img
              className="explore-block__image"
              src={imageExplore} alt="obstract figure"
              width="369" height="249" loading="lazy"
            />
            <img
              className="explore-block__blur"
              src={imageExplore} alt="obstract figure"
              width="369" height="249" loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreBlock