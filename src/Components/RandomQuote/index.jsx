import React from "react";
import "./main.scss";
import { useState, useEffect } from "react";

function RandomQuote(props) {
  const [data, setData] = useState(null);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  function getrandomQuote() {
    let getnumberRandom =
      data.quotes[Math.floor(Math.random() * data.quotes.length)];
    return getnumberRandom;
  }
  function getQuote() {
    let randomQuote = getrandomQuote();
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  return (
    <div
      className="flex justify-center items-center bg-gray-400 
    h-90"
    >
      <div className="relative -mt-44 min-h-50 w-3/5 main-color p-10 rounded-3xl ">
        <p className="text-white text-2xl text-center py-6">
          {quote ? quote : "No Pain, No Gain"}
        </p>
        <div className="py-6 text-right mr-10 text-2xl text-white">
          - {author ? author : "Idioms"}
        </div>
        <button
          onClick={getQuote}
          className="p-3 bg-yellow-200 hover:bg-yellow-300 text-lg transition rounded-xl absolute bottom-9"
        >
          Random Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
