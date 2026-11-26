const tabs = document.querySelectorAll('.tabs button');
let category = 'Things to do';
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => item.classList.remove('active'));
  tab.classList.add('active');
  category = tab.textContent.trim().replace(/^\S+\s+/, '');
  document.getElementById('form-title').textContent = tab.dataset.title;
}));
const form = document.getElementById('search-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const result = document.getElementById('result');
  result.textContent = `Demo search: ${category} in ${data.get('destination')} for ${data.get('travelers')}${data.get('date') ? ' on ' + data.get('date') : ''}. No live booking service is connected.`;
  result.hidden = false;
});
document.querySelectorAll('.destination').forEach(card => card.addEventListener('click', () => {
  form.elements.destination.value = card.dataset.place;
  document.getElementById('booking').scrollIntoView();
  form.elements.destination.focus();
}));
document.getElementById('read-story').addEventListener('click', () => {
  const story = document.getElementById('story');
  story.hidden = !story.hidden;
});
