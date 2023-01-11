const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");

const regExp = /\d/;

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {

    if (!e.target.value.match(regExp)) {
      e.target.value = "";
    }

    const currentInput = input,
      prevInput = input.previousElementSibling,
      nextInput = input.nextElementSibling;

    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      });
    }

    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});


window.addEventListener("load", () => inputs[0].focus());