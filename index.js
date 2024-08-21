const check = document.getElementById("checkbox");
const music = document.getElementById("music");
check.onclick = () => {
    if (check.checked) {
      music.play();
    } else {
      music.pause();
    }
}