/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import "../Style/Reflections.css";
import { Card, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import chevronLeft from "@iconify-icons/feather/chevron-left";
import ReflectFooter from "../Components/ReflectFooter";
import moment from "moment";

const ReflectionDetails = () => {
	const [data, setData] = useState([]);
	const token = localStorage.getItem("users");
	console.log("local token  ", token);

	useEffect(() => {
		fetch("/api/reflects/display", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0].answer);
				setData(data);
			});
	}, [token]);

	const linkStyle = {
		width: "100vw",
		height: "10vh",
		borderRadius: "20px",
	};

	const params = useParams();
	const id = parseInt(params.practiceId);
	const note = data.find((note) => note.id === id);

	const body = note && (
		<>
			<h4 style={{ fontSize: "4vw" }}>
				<b>{note.title}</b>
			</h4>
			<p>{moment(note.completed_time).format("dddd, MMMM D")}</p>
			<div className="answer">
				<p>{note.answer}</p>
			</div>
			<p>{`The params id is ${params.practiceId}`}</p>
		</>
	);

	return (
		<div>
			<Container
				fluid
				className="ref-container"
				style={{ margin: "0", padding: "0" }}
			>
				<Card className="mb-3 reflection-top" style={linkStyle}>
					<Card.Header
						className="ref-top"
						style={{ borderRadius: "20px 20px 0 0" }}
					>
						<div className="ref-header">
							<div>
								<NavLink to="/reflects" style={{ fontSize: "4vw" }}>
									<Icon icon={chevronLeft} style={{ color: "white" }} />
								</NavLink>
								&nbsp;
								<span style={({ textAlign: "justify" }, { fontSize: "4vw" })}>
									Reflect
								</span>
							</div>
						</div>
					</Card.Header>
				</Card>
				<Card className="list-scroll">
					<Card.Body>{body}</Card.Body>
					<ReflectFooter />
				</Card>
			</Container>
		</div>
	);
};

export default ReflectionDetails;
