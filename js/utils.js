export const display = ({ text, options }) => {
  const textEl = document.getElementById('text');
  const btnsEl = document.getElementById('btns');

  textEl.innerText = text;

  while (btnsEl.firstChild) {
    btnsEl.removeChild(btnsEl.firstChild);
  }

  options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option.text;
    btn.addEventListener('click', () => option.action());
    if (showOption(option)) {
      btn.classList.add('deactivated');
      btn.disabled = true;
    }
    btnsEl.appendChild(btn);
  });
}

const showOption = option => !option.deactivated === undefined || option.deactivated;