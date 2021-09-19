/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "../Style/Home.css";
import { Icon } from "@iconify/react";
import activityIcon from "@iconify-icons/feather/activity";
import searchIcon from "@iconify-icons/feather/search";
import keyIcon from "@iconify-icons/feather/key";
import Logout from "../Components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";


const HomePage = () => {
	const history = useHistory();
	const practicePage = () => {
		if (isPracticed) {
			history.push("/practicecompleted");
			console.log(`complete ${isPracticed}`);
		} else {
			history.push("/practice");
			console.log(`not complete ${isPracticed}`);
		}
	};

	const reflectPage = () => history.push("/reflects");
	const token = localStorage.getItem("users");
	const [isPracticed, setIsPracticed] = useState(true);

	useEffect(() => {
		fetch("/api/practise", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (
					data.error ===
					"You have already done today's practice, please come back tomorrow. "
				) {
					setIsPracticed(true);
					console.log(data.error);
					console.log(`in true fetch ${isPracticed}`);
				} else {
					setIsPracticed(false);
					console.log(`in false fetch ${isPracticed}`);
				}
			});
	}, [token, isPracticed]);

	const buttonStyle = {
		color: "#FFF",
		backgroundColor: "#7DC579",
		padding: "30px",
		fontSize: "4vw",
		borderRadius: "20px",
		width: "85vw",
	};

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
					borderRadius: "50px 50px 0 0",
				}}
			>
				<Card.Body>
					<Link
						to="/practice"
						onClick={practicePage}
						style={({ textDecoration: "none" }, { color: "black" })}
					>
						<Card.Title className="option-title">
							<Icon icon={activityIcon} style={{ fontSize: "5vw" }} />
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
				<Link>
				<Button
					className="btn-continue"
					variant="default"
					style={buttonStyle}
					onClick={practicePage}
				>
					Continue
				</Button>
				</Link>
				<div className="log-out">
					<Logout />
				</div>
			</Card>
		</Container>
	);
};

export default HomePage;
