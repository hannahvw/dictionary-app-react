import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = `2cacbf3044aeb9a87b5a33at06fco72a`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form className="input-group mb-3" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            autoFocus={false}
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
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
  } else {
    load();
    return "Loading...";
  }

  
}
