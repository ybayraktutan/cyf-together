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
		fetch("http://localhost:3100/api/reflects/display", {
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
		width: "25vw",
		height: "100vh",
		borderRadius: "20px",
	};

	const params = useParams();
	const id = parseInt(params.practiceId);
	const note = data.find((note) => note.id === id);

	const body = note && (
		<>
			<h4>{note.title}</h4>
			<p>{moment(note.completed_time).format("dddd, MMMM D")}</p>
			<div>
				<p>{note.answer}</p>
			</div>
			<p>{`The params id is ${params.practiceId}`}</p>
		</>
	);

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
					<Card.Body className="list-scroll">{body}</Card.Body>
					<Card.Footer>
						<ReflectFooter />
					</Card.Footer>
				</Card>
			</Container>
		</div>
	);
};

export default ReflectionDetails;
