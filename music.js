window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const buttons = document.querySelectorAll(".buttons div");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});