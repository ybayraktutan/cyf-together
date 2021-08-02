/*eslint linebreak-style: ["error", "windows"]*/
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Practice.css";
import Practice from "../Components/Practice";
import Note from "../Components/Note";
import { Container } from "react-bootstrap";

const PracticePage = () => {
	const [data, setData] = useState([]);
	const [practiceDisplaying, setPracticeDisplaying] = useState(true);
	const token = localStorage.getItem("users");
	console.log("local token  ", token);
	console.log("");

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
				console.log(data[0].title);
				setData(data);
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
						<Practice data={data} setPracticeDisplaying={setPracticeDisplaying} />
					) : (
						<Note data={data} />
					)}
				</>
			)}
		</Container>
	);
};

export default PracticePage;
