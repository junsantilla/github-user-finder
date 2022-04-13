//Init Github
const github = new Github();

// Search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", (e) => {
	// get input text
	const userText = e.target.value;

	if (userText !== "") {
		// make http call
		github.getUser(userText).then((data) => {
			console.log(data);
			if (data.profile.message === "Not Found") {
				// show alert
				console.log("Profile not found!");
			} else {
				// show profile
			}
		});
	} else {
		// Clear profile
	}
});
