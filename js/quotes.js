const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (quotes) => {
  console.log(quotes);
  const blockQuote = document.getElementById("quote");
  blockQuote.innerHTML = quotes.quote;
};

loadQuotes();
