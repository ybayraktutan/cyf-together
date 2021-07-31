/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import ReflectionItem from "./ReflectionItem";
import "../Style/Reflections.css";
import ReflectFooter from "./ReflectFooter";
import { Card, Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import moment from "moment";

function newest (a, b) {
	if (a > b) {
		return -1;
	}

	return 1;
}

const ReflectionList = ({ data }) => {

	const titleStyle = {
		fontSize: "4vw",
		fontWeight: "bold",
		color: "black",
		textDecoration: "none",
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
	const sorted = keys.sort(newest);

	const sections = sorted.map((key) => {
		const notes = grouped[key];
		const time = moment(key);
		const formatted = time.format("MMMM YYYY");
		const sorted = notes.sort((a, b) => {
			if (a.completed_time > b.completed_time) {
				return -1;
			}

			return 1;
		});
		const items = sorted.map((practice) => {
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
				<p style={{ fontSize: "3vw" }}>
					<b>{formatted}</b>
				</p>
				<ul className="list">{items}</ul>
			</div>
		);
	});

	return (
		<div>
			<Container
				fluid
				className="reflect-container"
				style={{ margin: "0", padding: "0" }}
			>
				<Card
					className="title-reflection"
					variant="default"
					style={{ backgroundColor: "#6360FF", border: "none" }}
				>
					<Card.Header
						className="reflect-top"
						style={{ borderRadius: "20px 20px 0 0" }}
					>
						<p>Reflect</p>
					</Card.Header>
				</Card>
				<Card
					className="options-reflection"
					variant="default"
					style={{
						backgroundColor: "#F1F1FA",
						border: "1px solid #F1F1FA",
						borderRadius: "50px 50px 0 0",
					}}
				>
					<Card.Text>
						<Row className="titles-reflection">
							<Col sm id="title-one">
								<span>
									<NavLink to="/practice" style={titleStyle}>
										Practices
									</NavLink>
								</span>
							</Col>
							<Col sm></Col>
							<Col sm id="title-two">
								<span>
									<NavLink to="/*" style={titleStyle} class="text-muted">
										Explore
									</NavLink>
								</span>
							</Col>
						</Row>
					</Card.Text>
					<Card.Body
						className="list-scroll"
						style={{ backgroundColor: "#F1F1FA" }}
					>
						{sections}
					</Card.Body>
					<ReflectFooter />
				</Card>
			</Container>
		</div>
	);
};

export default ReflectionList;
