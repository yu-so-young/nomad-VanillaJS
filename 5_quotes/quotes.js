const quotes = [
{
    quote: "Hii",
    author: "me",
},
{
    quote: "hello",
    author: "you",
},
{
    quote: "heLLo",
    author: "you!",
},
{
    quote: "welcome",
    author: "we",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[todaysQuote].quote;
author.innerText = quotes[todaysQuote].author;