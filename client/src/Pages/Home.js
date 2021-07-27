/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import { useHistory, Link } from "react-router-dom";
import "../Style/Home.css";
// import * as Icon from "react-feather";
import { Icon } from "@iconify/react";
import homeIcon from "@iconify-icons/feather/home";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";
import Logout from "../Components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";

const HomePage = () => {
	const history = useHistory();
	const practicePage = () => history.push("/practice");
	const reflectPage = () => history.push("/reflects");
	return (
		<Container
			fluid
			className="home-container"
			style={{ margin: "0", padding: "0" }}
		>
			<Card
				className="title"
				variant="default"
				style={{ backgroundColor: "#6360FF", border: "none" }}
			>
				<Card.Body>
					<Card.Title as="h2">Caring starts with you</Card.Title>
					<Card.Text as="p">
						Daily exercises to develope your relationships, using cognitive
						behavioural therapy non violent communication, behavioural science,
						mindfulness and breathwork.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card
				className="option"
				variant="default"
				style={{
					backgroundColor: "#F1F1FA",
					border: "1px solid #F1F1FA",
					borderRadius: "100px 100px 0 0",
				}}
			>
				<Card.Body>
					<Link
						to="/practice"
						onClick={practicePage}
						style={({ textDecoration: "none" }, { color: "black" })}
					>
						<Card.Title className="option-title">
							<Icon icon={homeIcon} style={{ fontSize: "5vw" }} />
							<h3>Practice</h3>
						</Card.Title>
						<Card.Text className="option-text" as="p">
							Build positive routines and habits
						</Card.Text>
					</Link>
					<Link
						to="/reflects"
						onClick={reflectPage}
						style={({ textDecoration: "none" }, { color: "black" })}
					>
						<Card.Title className="option-title">
							<Icon icon={keyIcon} style={{ fontSize: "5vw" }} />
							<h3>Reflect</h3>
						</Card.Title>
						<Card.Text className="option-text" as="p">
							Discover yourself and what matters to you
						</Card.Text>
					</Link>
					<Card.Title className="option-title">
						<Icon icon={searchIcon} style={{ fontSize: "5vw" }} />
						<h3>Learn</h3>
					</Card.Title>
					<Card.Text className="option-text" as="p">
						Bite-sized expert learning on relationships
					</Card.Text>
				</Card.Body>
				<Button
					className="btn-continue"
					variant="default"
					style={{
						color: "#FFF",
						backgroundColor: "#7DC579",
						padding: "40px",
						fontSize: "4vw",
						borderRadius: "20px",
					}}
					onClick={practicePage}
				>
					Continue
				</Button>
				<div className="log-out">
					<Logout nav={"Log Out"} />
				</div>
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
					<div>
						<Link
							to="/practice"
							onClick={practicePage}
							style={({ textDecoration: "none" }, { color: "black" })}
						>
							<div className="section-title">
								<Icon.Home />
								<h5>Practice</h5>
							</div>
							<p>Build positive routines and habits</p>
						</Link>
					</div>
					<div className="section-title">
						<Link
							to="/reflect"
							onClick={reflectPage}
							style={({ textDecoration: "none" }, { color: "black" })}
						>
							<div className="section-title">
								<Icon.Key />
								<h5>Reflect</h5>
							</div>
							<p>Discover yourself and what matters to you</p>
						</Link>
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
					<button type="button" className="btn-continue" onClick={practicePage}>
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
