const title = document.getElementById('title');
const content = document.getElementById('content');

title.textContent = localStorage['title'] || 'Note Title';
content.textContent = localStorage['content'] || ' Just type here. your text is saved automatically every second';

setInterval(function() {
  localStorage['title'] = title.textContent;
  localStorage['content'] = content.textContent;
}, 1000);
