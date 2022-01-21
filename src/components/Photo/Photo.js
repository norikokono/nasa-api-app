import React from "react";
import "./Photo.css";

const Photo = props => (
    <div>
      <h3 className="photo-title">{props.photo.title}</h3>
      <p className="photo-date">{props.photo.date}</p>
      {/* <img src={props.photo.url} alt={props.photo.title} /> */}
      {props.photo.media_type === "image" ? (
        <img
          src={props.photo.url}
          alt={props.photo.title}
          className="photo"
        />
      ) : (
          <iframe
            title="space-video"
            src={props.photo.url}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            className="photo"
          />
        )}
      <p className="photo-explanation">{props.photo.explanation}</p>
      <p className="photo-copyright">© {props.photo.copyright}</p>
      <a href={props.photo.hdurl} className="past-hyperlink" target="_blank" rel="noopener noreferrer">{props.photo.hdurl}</a>
    </div>
  );

  export default Photo;