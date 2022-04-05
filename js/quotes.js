var quotes = [
    {
      quote: "Programming isn't about what you know; it's about what you can figure out.",
      source: "Chris Pine",
    },
    {
      quote: "The only way to learn a new programming language is by writing programs in it.",
      source: "Dennis Ritchie",
    },
    {
      quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
      source: "Joyce Wheeler",
    },
    {
      quote: "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
      source: "Andrew Hunt",
    },
    {
      quote: "Testing leads to failure, and failure leads to understanding.",
      source: "Burt Rutan",
    },
    {
      quote: "The best error message is the one that never shows up.",
      source: "Thomas Fuchs",
    },
    {
        quote: "The most damaging phrase in the language is.. it's always been done this way",
        source: "Grace Hopper",
    },
    {
        quote: "Don't write better error messages, write code that doesn't need them.",
        source: "Jason C. McDonald",
    }
  ];
  
  // CSS Color Names
  // Compiled by @bobspace.
  //
  // A javascript array containing all of the color names listed in the CSS Spec.
  // The full list can be found here: http://www.w3schools.com/cssref/css_colornames.asp
  // Use it as you please, 'cuz you can't, like, own a color, man.
  // I deleted colors that didn't provide sufficient contrast or seemed particularly grating.
  
  var quoteIndex = 0;
  
  // const keyword is not supported in IE
  var NUMBER_OF_QUOTES = quotes.length;
  
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  
  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  

  
  function printQuote() {
    quoteIndex=getRandomIntInclusive(0, NUMBER_OF_QUOTES-1);
    document.getElementById('quote-box').innerHTML = quotes[quoteIndex].quote;
    document.getElementById('author').innerHTML = quotes[quoteIndex].source;
  }
  
  printQuote();

  let quoteButt=document.getElementById("quoteButt");
  quoteButt.addEventListener('click', _event => {
    printQuote();
  });
  
  // set the interval to change the quote to the defined interval