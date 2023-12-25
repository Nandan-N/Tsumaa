const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

/*yesBtn.addEventListener("click", () => {
  window.location.href = "https://levi1ackerman.github.io/gowmhearts.github.io/";
});*/

document.addEventListener('DOMContentLoaded', function () {
    const redirectButton = document.getElementById('shesaidyes');

    redirectButton.addEventListener('click', function () {
        window.location.href = "https://neptune2003.github.io/hearts/";
    });
});



noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
