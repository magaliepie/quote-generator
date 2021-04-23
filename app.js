window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hideLoader';
});

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            quote.textContent = data.content;
            quoteAuthor.textContent = data.author;
        });
}
