const targetDate = new Date("2023-02-06T00:00:00Z");
const now = new Date();
const newMarks = document.getElementsByClassName("new_mark");

if (now < targetDate) {
    Array.from(newMarks).forEach(newMark => {
      newMark.style.display = "inline-block";
    });
  }