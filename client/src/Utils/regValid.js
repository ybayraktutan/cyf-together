export default function regValid(values) {
	let errors = {};
	if (!values.firstname.trim()) {
		errors.firstname = "First name is required";
	}

	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Email address is invalid";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 8) {
		errors.password = "Password needs to be minimum 8 characters long";
	}

	if (!values.passwordCheck) {
		errors.passwordCheck = "Password is required";
	} else if (values.passwordCheck !== values.password) {
		errors.password = "Passwords do not match";
	}

	return errors;
}
