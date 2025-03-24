import type { FC } from "react"
import Preview from "@/widgets/Preview";
import ExploreBlock from "@/widgets/ExploreBlock";
import TopNft from "@/widgets/TopNft";

const MainPage: FC = () => {
  return (
    <>
      <Preview/>
      <TopNft/>
      <ExploreBlock/>
    </>
  )
}

export default MainPage