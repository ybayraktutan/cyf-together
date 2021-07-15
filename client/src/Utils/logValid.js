export default function logValid(values) {
	let errors = {};

	if (!values.email) {
		errors.email = "Email is required";
	} else if (
		!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			values.email
		)
	) {
		errors.email = "Email address is invalid";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 8) {
		errors.password = "Password needs to be minimum 8 characters long";
	}

	return errors;
}
