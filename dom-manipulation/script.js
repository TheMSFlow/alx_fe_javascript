const quoteDisplay = document.getElementById('quoteDisplay');
const quoteCategory = document.getElementById('quoteCategory');
const newQuote = document.getElementById('newQuote');
const newQuoteInput = document.getElementById('newQuoteText');
const quoteList = document.createElement('div');

// Load quotes from localStorage or set an empty array
let quotes = JSON.parse(localStorage.getItem('quotes')) || []; 



//function to display existing quotes
function displayQuotes() {
      const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
      if(storedQuotes.length > 0){
        quoteList.innerHTML = `<h2> See all the quotes </h2>`;
        document.body.appendChild(quoteList);
        storedQuotes.forEach(quote => {
        const quoteElement = document.createElement('p');
        quoteElement.textContent = `${quote.text}, ${quote.category}`;
        quoteList.appendChild(quoteElement);
    });
    console.log(storedQuotes);
    showExportBtn();
  } else {
    return;
  }
}

   //Display quotes on refresh
   displayQuotes();

   //function to show export button
  function showExportBtn (){
    const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'Export Quotes';
    exportBtn.classList.add('exportBtn');
    quoteList.appendChild(exportBtn);
    if(storedQuotes.length > 0){
      exportBtn.style.display = 'block';
      exportBtn.style.width = '100%';
      exportBtn.style.border = 'none';
      exportBtn.style.padding = '6px';
      exportBtn.style.backgroundColor = '#80AB82';
      exportBtn.style.cursor = 'pointer';

      //export quotes function
      exportBtn.addEventListener('click', () => {
        const jsonContent = JSON.stringify(storedQuotes, null, 2); // Format JSON for better readability
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download   
       = 'quotes.json';
        link.click();
        URL.revokeObjectURL(url);
      });
    } else {
      exportBtn.style.display = 'none';
    }
  }


// Function to add new quote and display in the DOM
function addQuote(){
    let newEntry = {text: newQuoteInput.value, category: newQuoteCategory.value};
    quotes.push(newEntry);

    const quoteElement = document.createElement('p');
    quoteElement.textContent = newEntry.text + ', ' + newEntry.category;
    quoteList.appendChild(quoteElement);

    localStorage.setItem('quotes', JSON.stringify(quotes));

    newQuoteInput.value = '';
    newQuoteCategory.value = '';
    displayQuotes();
}

// Function to show random quote
function showRandomQuote (){
  JSON.parse(localStorage.getItem('quotes'))
      const randomQuote = Math.floor(Math.random() * quotes.length)
      return `${quotes[randomQuote].text}, ${quotes[randomQuote].category}`;
};
  

// Random quote event listener
newQuote.addEventListener('click', () => {
  quoteDisplay.innerHTML = showRandomQuote();
});

//Listen for Enter key to submit new quote
document.body.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    addQuote();
  }
});

//function to save imported quotes to local storage
function saveQuotes() {
  const stringifiedQuotes = JSON.stringify(quotes);
  localStorage.setItem('quotes', stringifiedQuotes);
  displayQuotes();
}

//Import Json file function
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

