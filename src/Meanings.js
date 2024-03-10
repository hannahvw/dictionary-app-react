import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div>
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>{props.meaning.definition}
        <br />
        {props.meaning.example}</p>
        
      </div>
    </div>
  );
}
