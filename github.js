class Github {
	constructor() {
		this.client_id = "f6a81fb190d5b104f236";
		this.client_secret = "06d002df18546977433795dadcf7eb447a3c2027";
		this.repos_count = 5;
		this.repos_sort = "created: asc";
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
			{
				headers: {
					authorization:
						"token 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",
				},
			}
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
			{
				headers: {
					authorization:
						"token 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",
				},
			}
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
