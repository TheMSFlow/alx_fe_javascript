const quoteDisplay = document.getElementById('quoteDisplay');
const quoteCategory = document.getElementById('quoteCategory');
const newQuote = document.getElementById('newQuote');
const newQuoteInput = document.getElementById('newQuoteText');

let quotes = [
    {text: "Do hard things" , category: "Education"},
    {text: "Black and Yellow" , category: "Music"},
    {text: "I have a dream" , category: "Inspirational"},
    {text: "Is there no one else?" , category: "Movie"},
    {text: "God is the greatest!" , category: "Religion"},
    {text: "What's the cost of one customer?" , category: "Business"}
]

// Function to show random quote
function showRandomQuote (){
    const randomQuote = Math.floor(Math.random() * quotes.length)
    return `${quotes[randomQuote].text}, ${quotes[randomQuote].category}`;
}

// Function to add new quote through form
function createAddQuoteForm (text,category) {
    const newQuote = {text,category};
    quotes.push(newQuote);
}

// When the show new Quote button is clicked a random quote is displayed
newQuote.addEventListener('click', () => {
    quoteDisplay.innerHTML = showRandomQuote();
});


let quoteList = '';

//function to display existing quotes
function displayQuotes() {
    if (!quoteList) {
      quoteList = document.createElement('div');
      quoteList.innerHTML = `<h2> See all the quotes </h2>`;
      document.body.appendChild(quoteList);
    }
  
    quotes.forEach(quote => {
      const quoteElement = document.createElement('p');
      quoteElement.textContent = `${quote.text}, ${quote.category}`;
      quoteList.appendChild(quoteElement);
    });
  }

// Function to add new quote and display in the DOM
function addQuote(){
    let newEntry = {text: newQuoteInput.value, category: newQuoteCategory.value};
    quotes.push(newEntry);
    console.log(quotes);

    const quoteElement = document.createElement('p');
    quoteElement.textContent = newEntry.text + ', ' + newEntry.category;
    quoteList.appendChild(quoteElement);

    newQuoteInput.value = '';
    newQuoteCategory.value = '';
    
}

// Initial display of quotes
displayQuotes();

