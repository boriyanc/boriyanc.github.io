const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const originalPosition = {
    top: noBtn.offsetTop,
    left: noBtn.offsetLeft
};

yesBtn.addEventListener("click", () => {
    if (yesBtn.innerHTML === "hey *cutely*") {
        question.innerHTML = "erm! i like u";
        gif.src = "baby.gif";

        // renaming buttons
        yesBtn.innerHTML = "me too!";
        noBtn.innerHTML = "tit's not dat deep";
    
        // gets the noBtn back to its original position (attempted)
        resetNoBtnPosition();
    } else if (yesBtn.innerHTML === "me too!") {
        question.innerHTML = "iloveyoutoo babyyyy";
        gif.src = "hug-love.gif";

        yesBtn.innerHTML = "uwu *submissively";
        noBtn.innerHTML = "ew go away";

        noBtn.style.left = originalPosition.left + 'px';
        noBtn.style.top = originalPosition.top + 'px';
    } else if (yesBtn.innerHTML === "uwu *submissively") {
        question.innerHTML = "anyway here's a lil smth to show you how much i appreciate you";
        gif.src = "me.gif";

        yesBtn.innerHTML = "okay!";
        noBtn.innerHTML = "i dont like u sry";

        noBtn.style.left = originalPosition.left + 'px';
        noBtn.style.top = originalPosition.top + 'px';
    } else if (yesBtn.innerHTML === "okay!") {
        question.innerHTML = "(proof i love you more thanks)";
        gif.src = "sunflower.gif";

        yesBtn.innerHTML = "you made it!";
        noBtn.innerHTML = "(updated on vday)";
    
        noBtn.style.left = originalPosition.left + 'px';
        noBtn.style.top = originalPosition.top + 'px';

        // linking the yes Btn
    } else if (yesBtn.innerHTML === "you made it!") {
        document.getElementById("babyDiv").style.display = "block";
        document.getElementById("hiddenDiv").style.display = "none";
    }
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width
    const maxY = window.innerHeight - noBtnRect.height

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})

function resetNoBtnPosition() {
    noBtn.style.left = originalPosition.left + 'px';
    noBtn.style.top = originalPosition.top + 'px';
}