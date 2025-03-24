import type {FC} from "react"
import Lot from "@/shared/ui/Lot";
import useTopNft from "./hooks/useTopNft";
import SliderSwiper from "@/shared/ui/SliderSwiper";
import { Navigation } from "swiper/modules"
import SvgIcon from "@/shared/ui/SvgIcon";
import "./TopNft.pcss"

const TopNft: FC = () => {
  const lots = useTopNft()
  return (
    <section className="top-nft">
      <h2 className="top-nft__title title title--big title--main-3-very-light container">Weekly - Top NFT</h2>
      <SliderSwiper
        className="top-nft__slider"
        slides={lots.map((lot) => ({
          id: lot.id,
          element: <Lot className="top-nft__lot" key={lot.id} lot={lot}/>
        }))}
        slideClassName="top-nft__slide"
        loop
        freeMode
        centeredSlides
        modules={[Navigation]}
        navigation={{
          prevEl: ".top-nft__navigation-prev",
          nextEl: ".top-nft__navigation-next",
        }}
         breakpoints={{
          1700: {
            slidesPerView: 5.6
          },
          1366: {
            slidesPerView: 4.6
          },
          1024: {
            slidesPerView: 3.4
          },
          920: {
            slidesPerView: 4.2
          },
          767: {
            slidesPerView: 3.5
          },
          640: {
            slidesPerView: 2.9,
          },
          480: {
            slidesPerView: 2.15,
          },
          0: {
            slidesPerView: 1.5,
          }
        }}
      />
      <div className="top-nft__footer">
        <div className="top-nft__navigation">
          <button className="top-nft__navigation-button top-nft__navigation-prev" type="button">
            <SvgIcon className="top-nft__navigation-icon is-prev" name="arrow"/>
          </button>
          <hr className="top-nft__navigation-line"/>
          <button className="top-nft__navigation-button top-nft__navigation-next" type="button">
            <SvgIcon className="top-nft__navigation-icon" name="arrow"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopNft