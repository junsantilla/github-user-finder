class Github {
	constructor() {
		this.client_id = "f6a81fb190d5b104f236";
		this.client_secret = "06d002df18546977433795dadcf7eb447a3c2027";
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=100&sort=created:asc&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
