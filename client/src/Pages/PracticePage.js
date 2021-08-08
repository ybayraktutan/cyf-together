/*eslint linebreak-style: ["error", "windows"]*/
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Practice.css";
import Practice from "../Components/Practice";
import Note from "../Components/Note";
import { Container } from "react-bootstrap";
import PracticesCompleted from "./PracticesCompleted";

const PracticePage = () => {
	const [data, setData] = useState([]);
	// const [resError, setError] = useState("");
	const [practiceDisplaying, setPracticeDisplaying] = useState(true);
	const token = localStorage.getItem("users");
	console.log("local token  ", token);
	console.log("");

	useEffect(() => {
			console.log("use practice page "+token);
		fetch("/api/practise", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("data is");
				console.log(data);
				setData(data);
				// if(data.error){
				// 	setError("error");
				// }
			});
	}, [token]);

	return (
		<Container
			fluid
			className="practice-main-container"
			style={{ margin: "0", padding: "0" }}
		>
			{data[0] && (
				<>
					{practiceDisplaying ? (
						<Practice
							data={data}
							setPracticeDisplaying={setPracticeDisplaying}
						/>
					) : (
						<Note data={data} />
					)}
				</>
			)}
			{data.error && (
				<>
					<PracticesCompleted />
				</>
			)}
		</Container>
	);
};

export default PracticePage;
