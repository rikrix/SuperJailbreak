

document.addEventListener('DOMContentLoaded', function () {
    // Code to be executed after the DOM is ready

    function send(prompt) {
        var textArea = document.querySelector('form textarea');
        if (textArea) {
            textArea.value = prompt;
            textArea.dispatchEvent(new Event('input'));
            textArea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13 }));
        } else {
            console.error("Elemento 'form textarea' non trovato.");
        }
    }

    function handleDan11ButtonClick() {
        const prompt = 'Prompt associato al bottone "dan 11"';
        send(prompt);
    }

    function handleDeveloperModeButtonClick() {
        const prompt = 'Prompt associato al bottone "developer mode"';
        send(prompt);
    }

    function handleImageOutputButtonClick() {
        const prompt = 'Prompt associato al bottone "image output"';
        send(prompt);
    }

    // Evento onclick per il pulsante "dan 11"
    document.getElementById('dan11Button').addEventListener('click', handleDan11ButtonClick);

    // Evento onclick per il pulsante "developer mode"
    document.getElementById('developerModeButton').addEventListener('click', handleDeveloperModeButtonClick);

    // Evento onclick per il pulsante "image output"
    document.getElementById('imageOutputButton').addEventListener('click', handleImageOutputButtonClick);

    // API tabs
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        console.log('Scheda corrente:', currentTab);
    });

    // API runtime
    chrome.runtime.sendMessage({ message: 'Esempio di messaggio' }, function (response) {
        console.log('Risposta dallo script di background:', response);
    });

    // API webNavigation
    chrome.webNavigation.onCompleted.addListener(function (details) {
        console.log('Pagina web completata:', details);
    });
});
