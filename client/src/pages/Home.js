import React from "react";
import Header from "../Components/Header";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";

const HomePage = () => {
	const history = useHistory();
	const newPage = () => history.push("/new");
	return (
		<div className="container">
			<Header title={"Dashboard"} nav={"Log Out"} />
			<div className="project__bg">
				<div className="project__container container grid">
					<div className="project__data">
						<h2 className="project__title">Caring starts with you</h2>
						<p className="project__description">
							Daily exrecises to develope your relationships, using cognitive
							bhavioural therapy non-voilent communication, behavioural science,
							mindfulness and breathwork.
						</p>
					</div>
				</div>
			</div>
			<div className="container-option">
				<div className="data">
					<h2 className="section__title">Reflect</h2>
					<span className="section__subtitle">
						Discover yourself and what matters to you
					</span>
				</div>
				<div>
					<h2 className="section__title">Learn</h2>
					<span className="section__subtitle">
						Bite-sized expert learning on relationships
					</span>
				</div>
				<div>
					<h2 className="section__title">Practice</h2>
					<span className="section__subtitle">
						Build positive routines and habits
					</span>
				</div>
			</div>
			<div>
				<button type="button" className="btn-continue" onClick={newPage}>
					Continue
				</button>
			</div>
		</div>
	);
};

export default HomePage;
