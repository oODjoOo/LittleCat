document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const clickButton = document.getElementById('click-button');
    const message = document.getElementById('message');

    let startTime;
    let endTime;
    let timeout;

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        message.textContent = 'Préparez-vous...';
        timeout = setTimeout(() => {
            startTime = new Date().getTime();
            clickButton.classList.remove('hidden');
            message.textContent = 'Cliquez maintenant!';
        }, Math.floor(Math.random() * 2000) + 1000); // entre 1 et 3 secondes
    });

    clickButton.addEventListener('click', () => {
        endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        clickButton.classList.add('hidden');
        message.textContent = `Votre temps de réaction est de ${reactionTime} ms.`;
        startButton.classList.remove('hidden');
        clearTimeout(timeout);
    });
});