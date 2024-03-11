import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div>
        <h4>{props.meaning.partOfSpeech}</h4>
        <p className="definition">
          {props.meaning.definition}
          </p>
          <p className="example">
          {props.meaning.example}
          </p>
          <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
