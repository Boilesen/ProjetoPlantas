import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Plant from "./Plant";
// import { Plants } from "react";

export class Plants extends Component {
  state = {
    plants: [],
    search: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://trefle.io/api/v1/plants?token=H-iPKUxL1-rJjUSfRtnF3cE2m2bZmOHSh9lkvp1AQC0"
      )
      .then((response) => {
        this.setState({ plants: response.data });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const { common_name, value } = event.target;
    this.setState({ [common_name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `'https://trefle.io/api/v1/plants/search?token=H-iPKUxL1-rJjUSfRtnF3cE2m2bZmOHSh9lkvp1AQC0&q=${this.state.search}`
      )
      .then((response) => this.setState({ plants: response.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { plants } = this.state;

    return (
      <div className="Plants">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search"></label>
          <input
            className="input"
            type="search"
            id="search"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search your plant"
          />
          <button>Search</button>
        </form>
        {plants.map((plant) => {
          return (
            <Link key={plant._id} to={`/plant/${plant._id}`}>
              <Plant plant={plant} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Plants;
