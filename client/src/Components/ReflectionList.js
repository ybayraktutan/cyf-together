/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import ReflectionItem from "./ReflectionItem";
import "../Style/Reflections.css";
import ReflectFooter from "./ReflectFooter";
import { Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import moment from "moment";

const ReflectionList = ({ data }) => {
	const linkStyle = {
		width: "25vw",
		height: "100vh",
		borderRadius: "20px",
	};

	const titleStyle = {
		backgroundColor: "#F1F1FA",
		paddingTop: "10px",
	};

	const grouped = {};

	data.forEach((note) => {
		const key = note.completed_time && note.completed_time.slice(0, 7);

		const value = grouped[key];

		if (value) {
			value.push(note);
		} else {
			grouped[key] = [note];
		}
	});

	const keys = Object.keys(grouped);
	const sorted = keys.sort((a, b) => {
		if (a > b) {
			return -1;
		}

		return 1;
	});

	const sections = sorted.map((key) => {
		const notes = grouped[key];
		const time = moment(key);
		const formatted = time.format("MMMM YYYY");
		const items = notes.map((practice) => {
			return (
				<ReflectionItem
					key={practice.id}
					id={practice.id}
					title={practice.title}
					answer={practice.answer}
					date={practice.completed_time}
				/>
			);
		});

		return (
			<div key={time}>
				<p style={{ fontSize: "12px" }}>
					<b>{formatted}</b>
				</p>
				<ul className="list">{items}</ul>
			</div>
		);
	});

	return (
		<div>
			<Container className="container" style={{ margin: "0", padding: "0" }}>
				<Card variant="default" className="mb-3" style={linkStyle}>
					<Card.Header
						className="reflect-top"
						style={
							({ backgroundColor: "black" }, { borderRadius: "20px 20px 0 0" })
						}
					>
						<p>Reflect</p>
					</Card.Header>
					<Card.Link className="titles" style={titleStyle}>
						<span>
							<NavLink to="/practice">Practices</NavLink>
						</span>
						<span style={{ color: "91919F" }}>
							<NavLink to="/*">Explore</NavLink>
						</span>
					</Card.Link>
					<Card.Body
						className="list-scroll"
						style={{ backgroundColor: "#F1F1FA" }}
					>
						{sections}
					</Card.Body>
					<Card.Footer>
						<ReflectFooter />
					</Card.Footer>
				</Card>
			</Container>
		</div>
	);
};

export default ReflectionList;
