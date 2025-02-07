import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { CreateProfileOwner } from "./pages/createProfileOwner";
import { CreateProfileWalker } from "./pages/createProfileWalker";
import { OwnerProfile } from "./pages/profileOwner";
import { Registration } from "./pages/registration";
import { ProfileWalker } from "./pages/profileWalker";
import injectContext from "./store/appContext";
import { Login } from "./component/login";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardWalkers } from "./component/cardWalkers";
import { Carousel } from "./component/carousel";
import { Jumbotron } from "./component/Jumbotron";
import { CardOwners } from "./component/cardOwners";
import { Comments } from "./component/comments";
import { NewRide } from "./component/NewRide";
import { SearchWalker } from "./pages/searchWalker";
import { VerPerfilWalker } from "./pages/verPerfilWalker";
import { VerPerfilOwner } from "./pages/verPerfilOwner";
import { ToastContainer, toast } from "react-toastify";
import { MisPaseos } from "./pages/misPaseos";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<CreateProfileOwner />} path="/createProfileOwner" />
                        <Route element={<CreateProfileWalker />} path="/createProfileWalker" />
                        <Route element={<NewRide />} path="/newride/:walkerid" />
                        <Route element={<OwnerProfile />} path="/profile-owner" />
                        <Route element={<ProfileWalker />} path="/profile-walker" />
                        <Route element={<Registration />} path="/registration" />
                        <Route element={<VerPerfilWalker />} path="/perfil-walker/:id" />
                        <Route element={<VerPerfilOwner />} path="/perfil-owner/:id" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<MisPaseos />} path="/paseos" />
                        <Route element={<SearchWalker />} path="/search-walker" />
                        <Route element={<ToastContainer />} path="/ToastContainer" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
