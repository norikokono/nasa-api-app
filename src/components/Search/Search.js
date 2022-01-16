// https://medium.com/@jen.snyder/how-to-use-react-to-display-nasas-astronomy-picture-of-the-day-283c01ff9e31

import React, { Component } from "react";
import DateInput from "../../components/DateInput/DateInput";
import Photo from "../../components/Photo/Photo";

const apiKey = process.env.REACT_APP_NASA_KEY;

class Search extends Component {
  state = {
    date: "",
    photo: ""
  };
  

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

render() {
    return (
      <div>
        <h3>Search by Date</h3>
        <DateInput
          changeDate={this.changeDate}
          date={this.state.date}
        />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}
export default Search;