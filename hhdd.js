let noCount = 0;

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const message = document.getElementById("message");
const catImg = document.getElementById("catImg");
const audioYes = document.getElementById("audioYes");
const audioNo = document.getElementById("audioNo");
const audioBg = document.getElementById("audioBg");

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.2;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Em chắc chưa?",
    "Em không kiếm được ai như anh đâu...",
    "Đừng mà bay bii 😭",
    "Em đang làm trái tim anh tan nát đó 💔",
    "Ôi đừng mà 🥺",
    "Nếu em từ chối nữa, anh sẽ khóc mất đó 😢"
  ];
  const index = Math.min(noCount, messages.length - 1);
  return messages[index];
}

function changeImage(index) {
  const maxImages = 5;
  const imageIndex = Math.min(index, maxImages);
  catImg.src = "img/cat.gif";
  catImg.style.transform = 'scale(1.05)';
  setTimeout(() => {
    catImg.style.transform = 'scale(1)';
  }, 300);
}

yesButton.addEventListener("click", () => {

  audioNo.pause();
  audioNo.currentTime = 0;

  audioBg.pause();
  message.textContent = "YẾ ĐÚNG RỒI BÂY BIII ai nớp diu ! 🥰💕";
  yesButton.disabled = true;
  noButton.disabled = true;

  audioYes.play();

  audioYes.onended = () => {
    audioBg.play();
  };

  catImg.src = "img/funnygifsbox.com-2020-03-27-08-27-45-25.gif"; 
});
noButton.addEventListener("click", () => {
  audioYes.pause();
  audioYes.currentTime = 0;

  audioBg.pause();

  noCount++;
  message.textContent = generateMessage(noCount);

  catImg.src = "img/sayyyy.gif"; 
  resizeYesButton();
  audioNo.play();
  audioNo.onended = () => {
    audioBg.play();
  };
});

