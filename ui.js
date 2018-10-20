class UI {
  constructor() {
     this.profile = document.getElementById('profile');
  }

  // create method showProfile that take a user and render it on screen
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row" >
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mt-3">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mt-3">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mt-3">Followers Repos: ${user.followers}</span>
            <span class="badge badge-info mt-3">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company:${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `
  }

  // create method showRepos
  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += ` 
        <div class="card card-body mb-2" >
          <div class="row">
            <div class="col-md-6"> 
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6"> 
              <span class="badge badge-primary mt-3">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mt-3">Watchers: ${repo.watchers}</span>
              <span class="badge badge-success mt-3">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });

    // Output the repos
   document.getElementById('repos').innerHTML = output;
  }

  // create method clearProfile that when the search box is clear then there is no render on the screen
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // clear alert message to avoid multipile alert messages
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // create method showAlert  when  there is no user-profile so popup alert message
  showAlert(msg, className) {
    // clear any remaining alerts
    this.clearAlert();
    //create div 
    const div = document.createElement('div');

    //add the classes
    div.className = className;

    //add  text 
    div.appendChild(document.createTextNode(msg));

    //grab the parent
    const container = document.querySelector('.searchContainer');

    // grab the sibling element
    const searchBox = document.querySelector('.search');

    // add the message 
    container.insertBefore(div, searchBox);

    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert()
    }, 3000);
  }
}