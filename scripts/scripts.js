'use strict';

const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
const refreshQuoteButton = document.querySelector('#refreshQuote');

function getQuote() {
  const chuckSaysParagraph = document.querySelector('#chuckSays');
  get(apiUrl).then(function(response) {
    chuckSaysParagraph.innerHTML = response.value;
  });
}

refreshQuoteButton.addEventListener('click', function(e) {
  e.preventDefault();
  getQuote();
});

getQuote();
