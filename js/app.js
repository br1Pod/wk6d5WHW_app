document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.querySelector('#input_form');
    newItem.addEventListener('submit', handleNewItemSubmit);
});

const handleNewItemSubmit = function (event) {
    event.preventDefault();
};