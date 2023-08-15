const jsConfetti = new JSConfetti()

const body = document.querySelector('body');
const audio = document.querySelector('audio');

body.onload = () => {
    console.log(audio.play())
    audio.play();
    setTimeout(() => {
        body.classList.add('host');
    }, 1000);

    setTimeout(() => {
        jsConfetti.addConfetti({
            emojis: ['🌹', '🌹', '✨', '🌸', '🌻', '🌸', '💠', '🌹', '🌸'],
         })
         jsConfetti.addConfetti({
            confettiRadius: 6,
            emojiSize: Math.floor(Math.random() * 4 ),
            confettiNumber: 100,
          })
    }, 2000);
};