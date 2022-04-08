const playButton = document.querySelector("#playButton");
const randomNumber = document.querySelector("#randomNumber");
let count = 0;
let i;

const num = () => {
  return Math.floor(Math.random() * 100000);
};

playButton.addEventListener("click", function () {
  playButton.style.backgroundColor = "rgba(62, 237, 246, 0.579)";
  i = setInterval(function () {
    count++;
    if (count === 10) {
      randomNumber.innerHTML = num();
      if (randomNumber.innerHTML < 1000) {
        setTimeout(function () {
          swal({
            title: "This site says...",
            text: "Congratulations, You Have Won!",
          });
        }, 100);
      } else {
        setTimeout(function () {
          swal({
            title: "This site says...",
            text: "Too bad! Yo've lost!",
          });
        }, 100);
      }
      clearInterval(i);
      count = 0;
    } else {
      randomNumber.innerHTML = num();
    }
  }, 100);
});
