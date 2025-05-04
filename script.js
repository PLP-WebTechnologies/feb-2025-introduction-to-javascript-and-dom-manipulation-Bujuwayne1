// 1. Change Text Content Dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = "Text changed dynamically! 🎉";
});

// 2. Modify CSS Styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const styleDemo = document.getElementById('style-demo');

changeStyleBtn.addEventListener('click', () => {
  styleDemo.classList.toggle('highlight');
});

// 3. Add/Remove Element on Button Click
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');
let newElement = null;

toggleElementBtn.addEventListener('click', () => {
  if (!newElement) {
    newElement = document.createElement('p');
    newElement.textContent = "New element added!";
    newElement.style.color = "blue";
    elementContainer.appendChild(newElement);
  } else {
    elementContainer.removeChild(newElement);
    newElement = null;
  }
});