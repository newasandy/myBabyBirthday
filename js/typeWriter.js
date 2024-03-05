// const txt = "Love starts as a feeling, but to continue is a choice. And I find myself choosing you, more and more every day. " +
//     "I fell in love the way you fall asleep: slowly, and then all at once."

const txt = "HAPPY BIRTHDAY MY CUTIE BEAUTIFUL WIFE.  My greatest wish came true because I have you. No matter how far away you are from me, you’re always on my mind and in my heart. You are so much more than my wife - you are my confidante, my life partner, and my everything. I will do whatever I can to make you always feel sure that loved, cared. I wish you happiness, success and good health. And it is my wish that, even the worst days are easy when you hold my hand. And I am always be there for you in every good and bad situation.";
const typingSpeed = 35;
let i = 0;
const typeWriterText = document.getElementById('txts');
function typeWriter() {

    if (i < txt.length) {
        typeWriterText.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }

}
setTimeout(() => {
    typeWriter();
}, 1300);



function openGift() {
    window.location.href = './flower.html';
}



const audioElement = document.getElementById('overlay-video');
const playFunction = () => {
    audioElement.play();
    // play.style.display = 'block';
    toggleButtons();
    audioElement.style.display = 'block';

};
const pauseFunction = () => {
    audioElement.pause();
    // pause.style.display = 'block';
    toggleButtons();
    audioElement.style.display = 'none';
};



const toggleButtons = () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    // Toggle the visibility of buttons
    if (button1.style.display === 'none') {
        button1.style.display = 'block';
        button2.style.display = 'none';
    } else {
        button1.style.display = 'none';
        button2.style.display = 'block';
    }
};
