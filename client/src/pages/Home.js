import React from "react";
import Header from "../Components/Header";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";
import * as Icon from "react-feather";

const HomePage = () => {
	const history = useHistory();
	const newPage = () => history.push("/new");
	return (
		<div className="container">
			<Header nav={"Log Out"} />
			<div className="project__bg">
				<div className="project__data">
					<h2>Caring starts with you</h2>
					<p>
						Daily exrecises to develope your relationships, using cognitive
						bhavioural therapy non-voilent communication, behavioural science,
						mindfulness and breathwork.
					</p>
				</div>
			</div>
			<div className="container-option">
				<div>
					<div className="section__title">
						<Icon.Key />
						<h3>Reflect</h3>
					</div>
					<div>
						<span className="section__subtitle">
							Discover yourself and what matters to you
						</span>
					</div>
				</div>
				<div>
					<div className="section__title">
						<Icon.Search />
						<h3>Learn</h3>
					</div>
					<span className="section__subtitle">
						Bite-sized expert learning on relationships
					</span>
				</div>
				<div>
					<div className="section__title">
						<Icon.Home />
						<h3>Practice</h3>
					</div>
					<span className="section__subtitle">
						Build positive routines and habits
					</span>
				</div>
				<div>
					<button type="button" className="btn-continue" onClick={newPage}>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
