import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbarPrueba navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom border-2">
			<div className="container-fluid">
				<Link to="/">
				<a className="navbar-brand textColorNavBar" >Pet Walker</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse " id="navbarNav">
				
					<ul className="navbar-nav">
						{/* <li className="nav-item">
							<a className="nav-link textColorNavBar">Inicio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link textColorNavBar">Walkers</a>
						</li>
						<li className="nav-item">
							<a className="nav-link textColorNavBar">Dueños</a>
						</li> */}
					</ul>
				</div>
			
				<div className="login me-3">
					<Link to="/registration">
					<button className="btnSecondary textColor btn ">Registrarme</button>
					</Link>
				</div>
				<div className="login">
					<button className="btnPrimary btn ">Login</button>
				</div>
			</div>
		</nav>
	)

};

