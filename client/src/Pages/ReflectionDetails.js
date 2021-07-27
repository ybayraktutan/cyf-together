import React from "react";
import { useParams, NavLink } from "react-router-dom";
import "../Style/Reflections.css";
import { Card, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify-icons/feather/chevron-left";
import ReflectFooter from "../Components/ReflectFooter";


const notes = [
	{
		id: "1",
		title: "This is me",
		answer: "anser to all questions",
		date: "Monday, July 26",
	},
	{
		id: "2",
		title:
			"Think of a time you’ve had difficulty expressing yourself and note down the details",
		answer: "Not an anser to all questions",
		date: "Tuesday, July 27",
	},
	{
		id: "3",
		title: "Identify who you don’t communicate well with and why",
		answer: "Does that answer your questions",
		date: "Wednesday, July 28",
	},
	{
		id: "4",
		title: "Who do you communicate well with?",
		answer:
			"Daily exercises to develope your relationships, using cognitivebehavioural therapy non violent communication, behavioural science, mindfulness and breathwork",
		date: "Thursday, July 29",
	},
	{
		id: "5",
		title: "Be grateful about your relationships",
		answer:
			"Daily exercises to develope your relationships, using cognitivebehavioural therapy non violent communication, behavioural science, mindfulness and breathwork",
		date: "Thursday, July 29",
	},
	{
		id: "46",
		title: "When have you struggled to express yourself?",
		answer:
			"Daily exercises to develope your relationships, using cognitivebehavioural therapy non violent communication, behavioural science, mindfulness and breathwork",
		date: "Thursday, July 29",
	},
	{
		id: "8",
		title: "Who do you communicate well with?",
		answer:
			"Daily exercises to develope your relationships, using cognitivebehavioural therapy non violent communication, behavioural science, mindfulness and breathwork",
		date: "Thursday, July 29",
	},
	{
		id: "9",
		title: "Be grateful about your relationships",
		answer:
			"Daily exercises to develope your relationships, using cognitivebehavioural therapy non violent communication, behavioural science, mindfulness and breathwork",
		date: "Thursday, July 29",
	},
	{
		id: "7",
		title: "When have you struggled to express yourself?",
		answer:
			"Daily exercises to develope your relationships, using cognitivebehavioural therapy non violent communication, behavioural science, mindfulness and breathwork",
		date: "Thursday, July 29",
	},
];

const ReflectionDetails = () => {
    const params = useParams();

	const note = notes.find((note) => note.id === params.practiceId);

	const linkStyle = {
		width: "25vw",
		height: "100vh",
		borderRadius: "20px",
	};

	return (
		<div>
			<Container>
				<Card className="mb-3" style={linkStyle}>
					<Card.Header
						className="reflect-top"
						style={{ borderRadius: "20px 20px 0 0" }}
					>
						<div className="reflect-header">
							<div>
								<NavLink to="/reflects">
									<Icon icon={chevronLeft} style={{ color: "white" }} />
								</NavLink>
								&nbsp;
								<span style={({ textAlign: "justify" }, { fontSize: "15px" })}>
									Reflect
								</span>
							</div>
						</div>
					</Card.Header>
					<Card.Body className="note" >
						<h4>{note.title}</h4>
						<p>{note.date}</p>
						<div>
							<p>{note.answer}</p>
						</div>
						<p>{params.practiceId}</p>
					</Card.Body>
					<Card.Footer>
						<ReflectFooter />
					</Card.Footer>
				</Card>
			</Container>
		</div>
	);
};

export default ReflectionDetails;
