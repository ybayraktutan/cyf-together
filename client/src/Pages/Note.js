import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useHistory, Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify-icons/feather/chevron-left";
import checkIcon from "@iconify-icons/feather/check";
import PracticeFooter from "../Components/PracticeFooter";
import "../Style/Note.css";


const Note = () => {

	const history = useHistory();
	const complete = () => history.push("/confirmation");

	const linkStyle = {
		width: "20rem",
		borderRadius: "20px",
	};

	const [value, setValue] = useState("");

    return (
			<div>
				<Container style={linkStyle} className="container">
					<Card className="mb-3" style={linkStyle}>
						<Card.Body className="note-top">
							<div className="note-header">
								<div>
									<NavLink to="/practice">
										<Icon icon={chevronLeft} style={{ color: "white" }} />
									</NavLink>
									<span style={{ textAlign: "justify" }}>
										Today&apos;s Practice
									</span>
								</div>
							</div>
						</Card.Body>
						<Card.Body className="note-top2">
							<div>
								<p>Think about a grudge or annoyance that you can let go of</p>
							</div>
						</Card.Body>
						<Card.Body>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Control
									as="textarea"
									size="sm"
									value={value}
									onChange={(e) => setValue(e.target.value)}
									style={({ fontSize: "8px" }, { height: "250px" })}
								/>
							</Form.Group>
						</Card.Body>
						<div className="btn-note">
							<Link to="/confirmation" onClick={complete}>
								<Button
									variant="success"
									size="sm"
									style={{ backgroundColor: "#7DC579" }}
								>
									<Icon icon={checkIcon} />
									Done
								</Button>{" "}
							</Link>
						</div>
						<Card.Footer>
							<PracticeFooter />
						</Card.Footer>
					</Card>
				</Container>
			</div>
		);
};

export default Note;