const quotes = [
    {
        quote: "q1",
        author: "a1",
    },
    {
        quote: "q2",
        author: "a2",
    },
    {
        quote: "q3",
        author: "a3",
    }];
    
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    
    const todaysQuote = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[todaysQuote].quote;
    author.innerText = quotes[todaysQuote].author;