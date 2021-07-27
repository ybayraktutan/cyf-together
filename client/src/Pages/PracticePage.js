/*eslint linebreak-style: ["error", "windows"]*/
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Practice.css";
import Practice from "../Components/Practice";
import Note from "../Components/Note";

const PracticePage = () => {
	const [data, setData] = useState([]);
	const [noteDisplaying, setNoteDisplaying] = useState(true);
	const token = localStorage.getItem("users");
	console.log("local token  ", token);
	console.log("");

	useEffect(() => {
	fetch("/api/practise", {
		method: "GET",
		// body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			// Accept: "application/json",
			Authorization:
				`Bearer ${token}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data[0].title);
			setData(data);
		});
}, []);

	return (
		<div id="practice">
			{data[0] && (
				<>
					{noteDisplaying ? (
						<Practice data={data} setNoteDisplaying={setNoteDisplaying} />
					) : (
						<Note data={data} />
					)}
				</>
			)}
		</div>
	);
};

export default PracticePage;
