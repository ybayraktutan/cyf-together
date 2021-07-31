/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../Style/Reflections.css";
import ReflectionList from "../Components/ReflectionList";

const AllReflections = () => {
	const [data, setData] = useState([]);
	const token = localStorage.getItem("users");
	console.log("local token  ", token);

	useEffect(() => {
		fetch("api/reflects/display", {
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

	return (
		<Container
			fluid
			className="reflect-main-container"
			style={{ margin: "0", padding: "0" }}
		>
			<ReflectionList data={data} />
		</Container>
	);
};

export default AllReflections;
