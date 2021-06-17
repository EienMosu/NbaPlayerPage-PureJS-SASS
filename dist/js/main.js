const submitBtn = document.querySelector(".submit-button button");

const validateUsername = () => {
	const usernameInput = document.getElementById("username");

	if (usernameInput.value.length === 0) {
		alert("Username is required");
	} else if (usernameInput.value.length < 3) {
		alert("Username has to be atleast 3 characters");
	} else {
		//redirect
		window.location.replace(
			`/dist/playerpage.html?username=${usernameInput.value}`
		);
	}
};

submitBtn.addEventListener("click", validateUsername);
