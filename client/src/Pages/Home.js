/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { useHistory, Link } from "react-router-dom";
import "../Style/Home.css";
import * as Icon from "react-feather";
import Logout from "../Components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";

const HomePage = () => {
	const history = useHistory();
	const newPage = () => history.push("/practice");
	return (
		<Container fluid className="home-container">
			<Card>
				<Card.Body className="title">
					<Card.Title>Caring starts with you</Card.Title>
					<Card.Text>
						Daily exercises to develope your relationships, using cognitive
						behavioural therapy non violent communication, behavioural science,
						mindfulness and breathwork.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body className="container-option">
					<Card.Title className="section-title">
						<Icon.Key />
						<h5>Reflect</h5>
					</Card.Title>
					<Card.Text>Discover yourself and what matters to you</Card.Text>
					<Card.Title className="section-title">
						<Icon.Search />
						<h5>Learn</h5>
					</Card.Title>
					<Card.Text>Bite-sized expert learning on relationships</Card.Text>
					<Link
						to="/practice"
						onClick={newPage}
						style={({ textDecoration: "none" }, { color: "black" })}
					>
						<Card.Title className="section-title">
							<Icon.Home />
							<h5>Practice</h5>
						</Card.Title>
						<Card.Text>Build positive routines and habits</Card.Text>
					</Link>
					<Button
						variant="default"
						style={{ color: "#FFF", backgroundColor: "#7DC579" }}
						className="btn-continue"
						onClick={newPage}
					>
						Continue
					</Button>
					<div className="log-out">
						<Logout nav={"Log Out"} />
					</div>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default HomePage;

/*
return (
		<div className="home-container">
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
						<h5>Reflect</h5>
					</div>
					<div>
						<p>Discover yourself and what matters to you</p>
					</div>
				</div>
				<div>
					<div className="section-title">
						<Icon.Search />
						<h5>Learn</h5>
					</div>
					<p>Bite-sized expert learning on relationships</p>
				</div>
				<div>
					<Link
						to="/practice"
						onClick={newPage}
						style={
							({ textDecoration: "none" },
							{ color: "black" })
						}
					>
						<div className="section-title">
							<Icon.Home />
							<h5>Practice</h5>
						</div>
						<p>Build positive routines and habits</p>
					</Link>
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
*/
