const startBtn = document.querySelector('.start-button');
const popupInfo = document.querySelector('.popupTutorial');
const exitBtn = document.querySelector('.exit-button');
const continueBtn = document.querySelector('.continue-btn');
const main = document.querySelector('.main');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        document.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('selected'));
        
        // Add 'selected' class to the clicked button
        this.classList.add('selected');
    });
});
