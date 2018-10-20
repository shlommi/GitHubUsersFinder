// init class GitHub
const github = new Github;
// init class UI
const ui = new UI;

//search input
const searchInput = document.getElementById('searchUser');

//search input event listener
searchInput.addEventListener('keyup', (e) => {
  // get input user text
  const userText = e.target.value;

  if(userText !== '') {
      //make HTTP call
      github.getUser(userText)
      .then(data => {
        // check if there a message: Not Found
        if(data.profile.message === 'Not Found') {
          // show an alert users not found using ui.js
          ui.showAlert('User not found!', 'alert alert-danger');
        } else {  
         // show the profile using ui.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        }
      });
  } else {
    // clear  profile using ui.js
    ui.clearProfile();
  }

  e.preventDefault();
});