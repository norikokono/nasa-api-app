import React from "react";

const Photo = props => (
    <div>
      <h2>{props.photo.title}</h2>
      <p>{props.photo.date}</p>
      <img src={props.photo.url} alt={props.photo.title} />
      <p>{props.photo.explanation}</p>
      <p>© {props.photo.copyright}</p>
      <a href={props.photo.hdurl} className="past-hyperlink" target="_blank" rel="noopener noreferrer">{props.photo.hdurl}</a>
    </div>
  );

  export default Photo;