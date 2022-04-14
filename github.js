class Github {
	constructor() {
		this.client_id = "e716a832d86919e8ce8b";
		this.client_secret = "26d52a97539c960a7e585eef3c83ceb8c7b863b3";
		this.repos_count = 5;
		this.repos_sort = "created: asc";
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
