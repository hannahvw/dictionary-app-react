import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div>
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>Definition: {props.meaning.definition}
        <br />
        {props.meaning.example}
        <br />
        <Synonyms synonyms={props.meaning.synonyms}/>
        </p>
        
      </div>
    </div>
  );
}
