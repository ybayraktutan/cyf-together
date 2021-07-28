/*eslint linebreak-style: ["error", "windows"]*/
import React from "react";
import logo from "../Utils/logo.png";
import { Card } from "react-bootstrap";


const Header = () => {
	return (
		<Card
			className="header"
			variant="default"
			style={{ backgroundColor: "#6360FF", border: "none" }}
		>
			<Card.Img
				className="logo"
				variant="top"
				src={logo}
				alt="logo"
				style={{ width: "25vw", height: "25vw" }}
			/>
			<Card.Body>
				<Card.Title as="h1">Feelz</Card.Title>
				<Card.Text as="p">
					We are happier and healthier together
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Header;
