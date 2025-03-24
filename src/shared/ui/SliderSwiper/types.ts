import type { PropsWithChildren } from "react"
import type { SwiperOptions } from "swiper/types"
import type { ReactNode } from "react"
// @ts-ignore
import { SwiperRef, SwiperSlideProps } from "swiper/swiper-react"

export type TSliderSwiper = PropsWithChildren<SwiperOptions> & {
  slides: {id: string | number, element: ReactNode }[],
  className?: string
  slideClassName?: string
}
