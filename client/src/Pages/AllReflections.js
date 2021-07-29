import React, { useState, useEffect } from "react";
import ReflectionList from "../Components/ReflectionList";

const AllReflections = () => {
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


    return (
			<div>
				<ReflectionList data={data} />
			</div>
		);
};

export default AllReflections;
