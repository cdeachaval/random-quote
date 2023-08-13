import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => { return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author
        });
      });
  }

  return (
    <div className="App">
      <h1 class="app_title" >Random Quote:</h1>
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <p id="new-quote"></p>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text"> </a>
      </div>
      <div id="button-box">
        <button id="the-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-it" 
          href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' 
            + encodeURIComponent('"' + quoteInfo.text + '" ' + quoteInfo.author)}
          >Tweet</a>
      </div>  
    </div>
  );
}

export default App;
