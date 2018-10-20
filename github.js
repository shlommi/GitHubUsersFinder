class Github {
  constructor() {
    this.client_id = 'afa6b70c5a2ed09935dd';
    this.client_secret = '73e93591f4eeb5402ca65abe88fc3e9c03641809';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // get user method from https://api.github.com/users
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {  // we using return an Object because in the next fetch we'll  grab the user/repos and pass them into our object
      profile: profile,
      repos: repos
    }
  }
}