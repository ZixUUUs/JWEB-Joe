import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import Header from "./Header";
import HeroSec from "./HeroSec";
import SecondSec from "./SecondSec";
import ThirdSec from "./ThirdSec";
import Rubrique from "./Rubrique";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <HeroSec></HeroSec>
    <SecondSec></SecondSec>
    <ThirdSec></ThirdSec>
    <Rubrique></Rubrique>
  </StrictMode>
);
