// index.js

document.getElementById('generate').addEventListener('click', function() {
    function generateFakeApiKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let apiKey = '';
        for (let i = 0; i < 15; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            apiKey += characters[randomIndex];
        }
        return apiKey;
    }

    const apiKeyDiv = document.getElementById('apikey');
    apiKeyDiv.textContent = generateFakeApiKey();
});

let mode = "dark";
const body = document.getElementsByTagName('body')[0];
const modebtn = document.getElementById('mode');

modebtn.addEventListener('click', () => {
    if (mode === "dark") {
        mode = "light";
        modebtn.innerText = "dark mode";
        body.classList.add('light-mode');
    } else {
        mode = "dark";
        modebtn.innerText = "light mode";
        body.classList.remove('light-mode');
    }
});
