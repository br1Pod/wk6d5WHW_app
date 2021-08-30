document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.querySelector('#input_form');
    newItem.addEventListener('submit', handleNewTeamSubmit);

    const clearListButton = document.querySelector('#clear_list');
    clearListButton.addEventListener('click', handleClearListClick);
});

const handleNewTeamSubmit = function (event) {
    event.preventDefault();

    const teamListItem = createTeamListItem(event.target);
    const teamList = document.querySelector('#output_list');
    teamList.appendChild(teamListItem);

    event.target.reset();
};

const createTeamListItem = function (form) {
    const teamListItem = document.createElement('li');
    teamListItem.classList.add('team-list-item');
  
    const teamname = document.createElement('li');
    teamname.textContent = form.teamname.value;
    teamListItem.appendChild(teamname);
    document.createElement('ul');
  
    const manager = document.createElement('li');
    manager.textContent = form.manager.value;
    teamListItem.appendChild(manager);

    const stadium = document.createElement('li');
    stadium.textContent = form.stadium.value;
    teamListItem.appendChild(stadium);
  
    const city = document.createElement('li');
    city.textContent = form.city.value;
    teamListItem.appendChild(city);
  
    return teamListItem;
  };

  const handleClearListClick = function (event) {
    const teamList = document.querySelector('#output_list');
    teamList.innerHTML = '';
  };