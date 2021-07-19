import React from "react";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";
import * as Icon from "react-feather";
import Logout from "./Logout";

const HomePage = () => {
	const history = useHistory();
	const newPage = () => history.push("/new");
	return (
		<div className="container">
			<div className="title">
					<h2>Caring starts with you</h2>
					<p>
						Daily exercises to develope your relationships, using cognitive
						behavioural therapy non violent communication, behavioural science,
						mindfulness and breathwork.
					</p>
			</div>
			<div className="container-option">
				<div>
					<div className="section-title">
						<Icon.Key />
						<h3>Reflect</h3>
					</div>
					<div>
						<p>
							Discover yourself and what matters to you
						</p>
					</div>
				</div>
				<div>
					<div className="section-title">
						<Icon.Search />
						<h3>Learn</h3>
					</div>
					<p>
						Bite-sized expert learning on relationships
					</p>
				</div>
				<div>
					<div className="section-title">
						<Icon.Home />
						<h3>Practice</h3>
					</div>
					<p>
						Build positive routines and habits
					</p>
				</div>
				<div>
					<button type="button" className="btn-continue" onClick={newPage}>
						Continue
					</button>
				</div>
				<div className="log-out">
					<Logout nav={"Log Out"} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
