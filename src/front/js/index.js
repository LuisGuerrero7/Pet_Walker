//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { CardWalkers } from "./component/cardWalkers";
import { Carousel } from "./component/carousel";
import { Jumbotron } from "./component/Jumbotron";
import { Navbar } from "./component/navbar";
import { CardOwners } from "./component/cardOwners";
import { Comments } from "./component/comments";
import { NewRide } from "./component/NewRide";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
