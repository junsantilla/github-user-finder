//Init Github
const github = new Github();

//Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", (e) => {
	// get input text
	const userText = e.target.value;

	if (userText !== "") {
		// make http call
		github.getUser(userText).then((data) => {
			if (data.profile.message === "Not Found") {
				// show alert
				ui.userNotFound();
			} else {
				// show profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else {
		// Clear profile
	}
});
