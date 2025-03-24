import type { FC } from "react"
import type { TSliderSwiper } from "./types"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const SliderSwiper: FC<TSliderSwiper> = (props) => {
  const {
    children,
    slides,
    slideClassName,
    ...rest
  } = props

  return (
    <Swiper {...rest}>
      {slides?.map(({element, id}) => (
        <SwiperSlide  className={slideClassName} key={id}>{element}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderSwiper