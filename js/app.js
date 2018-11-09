document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});


const handleFormSubmit = function(event) {
  event.preventDefault();
  const newLineItem = document.createElement('p');
  newLineItem.textContent = `Title: ${event.target.title.value} |  Author: ${event.target.author.value} |  Category: ${event.target.category.value}`;
  const inputForm = document.querySelector('#reading-list');
  inputForm.appendChild(newLineItem)
  document.querySelector('#new-item-form').reset()
};
