import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";

const LimitedTextarea = ({ rows, cols, value, limit }) => {
	const [content, setContent] = useState(value.slice(0, limit));

	const setFormattedContent = useCallback(
		(text) => {
			setContent(text.slice(0, limit));
		},
		[limit, setContent]
	);

	return (
		<>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Control
					as="textarea"
					rows={rows}
					cols={cols}
					onChange={(event) => setFormattedContent(event.target.value)}
					value={content}
				/>
			</Form.Group>
			<p>
				{content.length}/{limit}
			</p>
		</>
	);
};

export default LimitedTextarea;

// const handleChange = (event) => {
// 	const shouldSetValue = value.length < 60;
// 	if (shouldSetValue) {
// 		setValue(event.target.value);
// 	}
// };