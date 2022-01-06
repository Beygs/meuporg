export const display = ({ text, options }) => {
  const textEl = document.getElementById("text");
  const btnsEl = document.getElementById("btns");

  textEl.innerText = text;

  while (btnsEl.firstChild) {
    btnsEl.removeChild(btnsEl.firstChild);
  }

  options.forEach((option) => {
    const btn = document.createElement("button");
    const hoverText = document.createElement('div');

    btn.innerText = option.text;
    btn.addEventListener("click", () => option.action());
    if (showOption(option)) {
      btn.classList.add("deactivated");
      btn.disabled = true;
    }
    hoverText.classList.add('hover-text');
    if (option.cost !== undefined) hoverText.innerText = `Coûte ${option.cost} mana`;

    btn.appendChild(hoverText);

    btnsEl.appendChild(btn);
  });
};

const showOption = (option) =>
  !option.deactivated === undefined || option.deactivated;
