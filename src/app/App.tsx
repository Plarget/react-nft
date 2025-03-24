import {withProviders} from "./providers";
import {Route, Routes} from "react-router";
import Layout from "@/widgets/Layout";
import MainPage from "@/pages/MainPage";
import './styles'
import {useEffect} from "react";

const App = () => {
  useEffect(() => {
    function updateScaleFactor() {
      let scaleFactor = Math.max(1.0, window.innerWidth / 1920);
      console.log(window.innerWidth, window.innerWidth / 1920)
      document.documentElement.style.setProperty("--scale-factor", `${scaleFactor}`);
    }

    window.addEventListener("resize", updateScaleFactor);
    updateScaleFactor();
    return () => {
      window.removeEventListener("resize", updateScaleFactor);
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  )
}

export default withProviders(App)
