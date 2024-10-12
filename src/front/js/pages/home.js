import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { CardOwners } from "../component/cardOwners";
import { CardWalkers } from "../component/cardWalkers";
import { Carousel } from "../component/carousel";
import { Comments } from "../component/comments";
import { Jumbotron } from "../component/Jumbotron";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center my-5">

						
			<Navbar />

			<Jumbotron />
			<Carousel />
			<div className="cards justify-content-around d-flex mb-5">
				<div className="d-flex">
					<CardWalkers />
					<CardWalkers />
				</div>

				<div className="d-flex">
					<CardOwners />
					<CardOwners />
				</div>
			</div>
			<Comments />

			{/* <div className="text-center d-flex flex-column my-3">
			<Link to="/createProfileOwner">
				<span className="btn btn-primary btn-lg my-3" href="#" role="button">
					create profile owner
				</span>
			</Link>
			<Link to="/createProfileWalker">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					create profile Walker
				</span>
			</Link>
			<Link to="/ownerProfile">
				<span className="btn btn-primary btn-lg my-3" href="#" role="button">
					Perfil de owner
				</span>
			</Link>
			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
