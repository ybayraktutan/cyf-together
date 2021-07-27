import React from "react";
import ReflectionList from "../Components/ReflectionList";

const notes = [
	{
		id: "1",
		title: "This is me",
		answer: "anser to all questions",
		date: "Monday, July 26",
	},
	{
		id: "2",
		title: "Who do you struggle to communicate with?",
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

const AllReflections = () => {

    return (
			<div>
				<ReflectionList practices={notes} />
			</div>
		);
};

export default AllReflections;

 // const [data, setData] = useState([]);
	// const token = localStorage.getItem("users");
	// console.log("local token  ", token);

	// 	useEffect(() => {
	// 		fetch("http://localhost:3100/api/reflects", {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 		})
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				console.log(data[0].answer);
	// 				setData(data);
	// 			});
	// 	}, [token]);