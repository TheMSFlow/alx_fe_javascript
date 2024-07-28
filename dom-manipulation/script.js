const quoteDisplay = document.getElementById('quoteDisplay');
const quoteCategory = document.getElementById('quoteCategory');
const newQuote = document.getElementById('newQuote');

const quotes = [
    {text: "Do hard things" , category: "Education"},
    {text: "Black and Yellow" , category: "Music"},
    {text: "I have a dream" , category: "Inspirational"},
    {text: "Is there no one else?" , category: "Movie"},
    {text: "God is the greatest!" , category: "Religion"},
    {text: "What's the cost of one customer?" , category: "Business"}
]

// console.log(quotes[0].text);

function showRandomQuote (){
    const randomQuote = Math.floor(Math.random() * quotes.length)
    return quotes[randomQuote].text;
}

// console.log(showRandomQuote());

function createAddQuoteForm (text,category) {
    const newQuote = {text,category};
    quotes.push(newQuote);
}

console.log(createAddQuoteForm());
console.log(quotes);