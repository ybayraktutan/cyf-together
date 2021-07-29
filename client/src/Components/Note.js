import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useHistory, Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify-icons/feather/chevron-left";
import checkIcon from "@iconify-icons/feather/check";
import PracticeFooter from "./PracticeFooter";
import "../Style/Note.css";


const Note = ({ data }) => {
	const history = useHistory();
	const [value, setValue] = useState(data[0].prompted_answer);
	const complete = () => {
		const token=localStorage.getItem("users");
		const body = { answer:value, practice_id:data[0].id };
		let result = fetch("/api/reflects", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
					"Content-Type": "application/json",
			Authorization:
				`Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

			});
		history.push("/confirmation");
	};

    return (
		<Container
			fluid
			className="practice-container"
			style={{ margin: "0", padding: "0" }}
		>
			<Card
				className="mb-3 note-top"
				style={{ backgroundColor: "#6360FF", border: "none" }}
			>
				<Card.Body className="note-header">
					<NavLink to="/practice">
						<Icon
							icon={chevronLeft}
							style={{ color: "white", fontSize: "4vw" }}
						/>
					</NavLink>
					<span style={{ textAlign: "justify" }}>
						Today&apos;s Practice
					</span>
				</Card.Body>
				<Card.Body className="note-title">
					<Card.Title as="h2">{data[0].practice}</Card.Title>
				</Card.Body>
			</Card>
			<Card
				className="note-bottom"
				style={{ backgroundColor: "#F1F1FA", padding: "0" }}
			>
				<Card.Body>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlTextarea1"
					>
						<Form.Control
							as="textarea"
							value={value}
							onChange={(e) => setValue(e.target.value)}
							style={{
								fontSize: "3vw",
								backgroundColor: "#F1F1FA",
								border: "none",
								width: "90vw",
								padding: "6vw",
								fontWeight: "bold",
							}}
						/>
					</Form.Group>
				</Card.Body>
				<div className="btn-note">
					<Link to="/confirmation" onClick={complete}>
						<Button
							type="button"
							variant="default"
							style={{
								color: "white",
								backgroundColor: "#7DC579",
								fontSize: "3vw",
								borderRadius: "10px",
								padding: "1vh 2vh",
							}}
						>
							<Icon icon={checkIcon} style={{ fontSize: "4vw" }} />
							Done
						</Button>{" "}
					</Link>
				</div>
				<PracticeFooter />
			</Card>
		</Container>
		);
};

export default Note;
