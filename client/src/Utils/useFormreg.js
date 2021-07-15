import { useState, useEffect } from "react";

const useForm = (callback, regValid) => {
	const [values, setValues] = useState({
		firstname: "",
		email: "",
		password: "",
		passwordCheck: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setValues({
			...values,
			[id]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(regValid(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors, isSubmitting, callback]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
