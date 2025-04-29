const dropBtn = document.querySelector(".dropbtn");

dropBtn.addEventListener("click", () => {
  const dropContent = document.querySelector(".dropContent");
  if (dropContent.style.display === "block") {
    dropContent.style.display = "none";
  } else {
    dropContent.style.display = "block";
  }
});

const listItems = document.querySelectorAll(".dropContent li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropBtn.firstChild.textContent = item.textContent;
  });
});
