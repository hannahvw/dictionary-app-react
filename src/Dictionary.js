import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = `2cacbf3044aeb9a87b5a33at06fco72a`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form className="input-group mb-3" onSubmit={search}>
          <input
            type="search"
            className="form-control"
            onChange={handleKeywordChange}
          />
          <button
            class="btn btn-outline-secondary"
            type="Search"
            id="button-addon2"
          >
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
