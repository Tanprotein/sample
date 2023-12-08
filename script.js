const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const btnGroup = document.querySelector(".btn-group");

let yesBtnClickCount = 0;

const createNewNoButton = () => {
    const newNoBtn = document.createElement("button");
    newNoBtn.classList.add("no-btn");
    newNoBtn.innerHTML = "No";
    newNoBtn.addEventListener("mouseover", handleNoBtnMouseover);
    btnGroup.appendChild(newNoBtn);
};

const handleButtonClick = () => {
    const mainBtn = document.querySelector(".main-btn");

    if (mainBtn.innerHTML === "Continue") {
        question.innerHTML = "Do you love me?";
        mainBtn.innerHTML = "Yes";
        createNewNoButton();
    } else {
        handleYesBtnClick();
    }
};

const handleYesBtnClick = () => {
    yesBtnClickCount++;

    if (yesBtnClickCount === 1) {
        question.innerHTML = "U sure?";
    } else if (yesBtnClickCount === 2) {
        question.innerHTML = "I love you too";
        yesBtnClickCount = 0;
    }
};

const handleNoBtnMouseover = () => {
    const noBtnRect = document.querySelector(".no-btn").getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    document.querySelector(".no-btn").style.left = randomX + "px";
    document.querySelector(".no-btn").style.top = randomY + "px";
};