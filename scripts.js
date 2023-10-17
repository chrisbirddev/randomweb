const question = document.querySelector(".question")
const question1 = document.querySelector(".question1")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

const questionEffect = question.getBoundingClientRect();
const yesBtnEffect = noBtn.getBoundingClientRect();

noBtn.addEventListener("click", () => {
    question.innerHTML = "See you later ;)"
})

yesBtn.addEventListener("mouseover", () => {
    const questionEffect = question.getBoundingClientRect();
    const noBtnEffect = noBtn.getBoundingClientRect();

    const maxX = questionEffect.width - yesBtnEffect.width;
    const maxY = questionEffect.height - yesBtnEffect.height;

    const x = Math.floor(Math.random() * maxX) +1
    const y = Math.floor(Math.random() * maxY) +1

    yesBtn.style.transform = `translate(${x}px, ${y}px)`;
});